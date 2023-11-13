
export class Perfil {
    private _id: number
    private _nome: string
    private _email: string
    private _postagens: Postagem[] = []
    private _seguidores: Perfil[] = [];
    private _seguindo: Perfil[] = [];



    constructor(id: number, nome: string, email: string, postagens: Postagem[], seguidores: Perfil[], seguindo: Perfil[]){
        this._id = id
        this._nome = nome
        this._email = email
        this._postagens = postagens
        this._seguidores = seguidores
        this._seguindo = seguindo
    }

    get id(): number{
        return this._id
    }

    get nome(): string{
        return this._nome
    }

    get email(): string{
        return this._email
    }

    get postagens(): Postagem[] {
        return this._postagens
    }

    adicionarPostagem(postagem: Postagem): void {
        this._postagens.push(postagem);
    }

    seguir(perfil: Perfil): void {
        if (!this._seguindo.includes(perfil) && perfil !== this) {
            this._seguindo.push(perfil);
            perfil.adicionarSeguidor(this);
            console.log(`Agora você está seguindo ${perfil.nome}.`);
        } else {
            console.log("Não é possível seguir este perfil.");
        }
    }


    adicionarSeguidor(perfil: Perfil): void {
        if (!this._seguidores.includes(perfil)) {
            this._seguidores.push(perfil);
        }
    }


    deixarDeSeguir(perfil: Perfil): void {
        const indexSeguido = this._seguindo.indexOf(perfil);
        const indexSeguidor = perfil._seguidores.indexOf(this);

        if (indexSeguido !== -1 && indexSeguidor !== -1) {
            this._seguindo.splice(indexSeguido, 1);
            perfil._seguidores.splice(indexSeguidor, 1);
            console.log(`Você deixou de seguir ${perfil.nome}.`);
        } else {
            console.log("Você não está seguindo este perfil.");
        }
    }

    listarSeguidores(): Perfil[] {
        return this._seguidores;
    }


    listarPostagensSeguidor(): Postagem[] {
        const postagensSeguidor: Postagem[] = [];

        this._seguindo.forEach((perfilSeguido) => {
            postagensSeguidor.push(...perfilSeguido.postagens);
        });

        return postagensSeguidor;
    }
  
}

export class Postagem{
    private _id: number
    private _texto: string
    private _curtidas: number
    private _descurtidas: number
    private _data: Date
    private _perfil: Perfil

    constructor(id: number, texto: string, curtidas: number, descurtidas: number, data: Date, perfil: Perfil){
        this._id = id
        this._texto = texto
        this._curtidas = curtidas
        this._descurtidas = descurtidas
        this._data = data
        this._perfil = perfil
        
    }

    get id(): number{
        return this._id
    }

    get texto(): string{
        return this._texto
    }

    get curtidas(): number{
        return this._curtidas
    }

    get descurtidas(): number{
        return this._descurtidas
    }

    get data(): Date{
        return this._data
    }

    get perfil(): Perfil{
        return this._perfil
    }

    curtir(): void {
        this._curtidas++
    }

    descurtir(): void {
        this._descurtidas++
    }

    ehPopular(): boolean {
        return this._curtidas > this._descurtidas * 1.5
    }
}


export class PostagemAvancada extends Postagem{
    private _hashtags: string[] = []
    private _visualizacoesRestantes: number

    constructor(id: number, texto: string, curtidas: number, descurtidas: number, data: Date, perfil: Perfil, hashtags: string[], visualizacoesRestantes: number){
        super(id, texto, curtidas, descurtidas, data, perfil)
        this._hashtags = hashtags
        this._visualizacoesRestantes = visualizacoesRestantes
    }

   get hashtags(): string[]{
    return this._hashtags
   }

   get visualizacoesRestantes(): number{
    return this._visualizacoesRestantes
   }

   adicionarHashtag(novaHashtag: string): void {
    if (this.existeHashtag(novaHashtag)) {
        console.log(`A hashtag '${novaHashtag}' já existe nesta postagem.`);
    } else {
        this._hashtags.push(novaHashtag);
        console.log(`Hashtag '${novaHashtag}' adicionada à postagem.`);
    }

   }

   existeHashtag(hashtag: string): boolean {
    return this._hashtags.includes(hashtag)
   }

   decrementarVisualizacoes(): void {
    if (this._visualizacoesRestantes > 0) {
        this._visualizacoesRestantes--;
        console.log('Visualização decrementada com sucesso.');
    } else {
        console.log('Visualizações já esgotadas.');
    }
}
}

export class repositorioDePerfis {
    private _perfis: Perfil[] = [];

    adicionarPerfil(novoPerfil: Perfil): void {
        this._perfis.push(novoPerfil);
        //console.log('Novo perfil adicionado com sucesso.');
    }

    consultar(id?: number, nome?: string, email?: string): Perfil | null {
        if (!id && !nome && !email) {
            return null; 
        }

        const perfilEncontrado = this._perfis.find((perfil) => {
            return (!id || perfil.id === id) && (!nome || perfil.nome === nome) && (!email || perfil.email === email);
        });

        return perfilEncontrado || null; 
    }
}

export class repositorioDePostagens {
    private _postagens: Postagem[] = []

    incluir(postagem: Postagem): void {
        this._postagens.push(postagem);

        // Adiciona a postagem ao array de postagens do perfil associado (se existir)
        const perfil = postagem.perfil;
        if (perfil) {
            perfil.adicionarPostagem(postagem);
        }
    }


    consultar(hashtag?: string, id?: number, texto?: string, perfil?: Perfil): Postagem[] {
        let postagensFiltradas: Postagem[] = this._postagens;

        // Filtra por hashtag (se fornecida) e por tipo PostagemAvancada
        if (hashtag) {
            postagensFiltradas = postagensFiltradas.filter(postagem => {
                return postagem instanceof PostagemAvancada &&
                    (postagem as PostagemAvancada).hashtags.includes(hashtag);
            });
        }

        return postagensFiltradas;
    }

    consultarPorId(id: number): Postagem | null {
        const postagemEncontrada = this._postagens.find((postagem) => postagem.id === id);
        return postagemEncontrada || null;
    }

}

export class RedeSocial {
    private _repositorioDePostagens: repositorioDePostagens
    private _repositorioDePerfis: repositorioDePerfis;
    

    constructor() {
        this._repositorioDePostagens = new repositorioDePostagens();
        this._repositorioDePerfis = new repositorioDePerfis();
    }

    
    incluirPerfil(perfil: Perfil): void {
        
        if (!perfil.id || !perfil.nome || !perfil.email) {
            console.error('Todos os atributos do perfil devem ser preenchidos.');
            return;
        }

        if (this._repositorioDePerfis.consultar(perfil.id, perfil.nome, perfil.email)) {
            console.error('Já existe um perfil com o mesmo id, nome ou e-mail.');
            return;
        }

        
        this._repositorioDePerfis.adicionarPerfil(perfil);
    }


    consultarPerfil(id?: number, nome?: string, email?: string): Perfil | null {
        return this._repositorioDePerfis.consultar(id, nome, email);
    }

    incluirPostagem(postagem: Postagem): void {
        if (!postagem.id || !postagem.texto || !postagem.perfil || !postagem.data) {
            console.error('Todos os atributos da postagem devem ser preenchidos.');
            return;
        }

        if (this._repositorioDePostagens.consultarPorId(postagem.id)) {
            console.error('Já existe uma postagem com o mesmo id.');
            return;
        }
        
        this._repositorioDePostagens.incluir(postagem);
        console.log('Nova postagem adicionada com sucesso.');
    }

    consultarPostagens(hashtag?: string, id?: number, texto?: string, perfil?: Perfil): Postagem[] {
        return this._repositorioDePostagens.consultar(hashtag, id, texto, perfil);
    }
    

    curtir(idPostagem: number): void {
        const postagemEncontrada = this._repositorioDePostagens.consultarPorId(idPostagem);
        
        if (postagemEncontrada) {
            postagemEncontrada.curtir();
            console.log('Postagem curtida com sucesso.');
        } else {
            console.error('Postagem não encontrada.');
        }
    }

    descurtir(idPostagem: number): void {
        const postagemEncontrada = this._repositorioDePostagens.consultarPorId(idPostagem);
        
        if (postagemEncontrada) {
            postagemEncontrada.descurtir();
            console.log('Postagem descurtida com sucesso.');
        } else {
            console.error('Postagem não encontrada.');
        }
    }

    decrementarVisualizacoes(postagem: PostagemAvancada): void {
        if (postagem) {
            postagem.decrementarVisualizacoes();
            console.log('Visualização decrementada com sucesso.');
        } else {
            console.error('Postagem não encontrada.');
        }
    }


    exibirPostagensPorPerfil(id: number): Postagem[] {
        const perfil = this._repositorioDePerfis.consultar(id);

        if (perfil) {
            return perfil.postagens;
        } else {
            console.error('Perfil não encontrado.');
            return [];
        }
    }

    exibirPostagensPorHashtag(hashtag: string): PostagemAvancada[] {
        const postagensAvancadas = this._repositorioDePostagens.consultar(hashtag) as PostagemAvancada[];

        return postagensAvancadas.filter((postagem) => postagem instanceof PostagemAvancada);
    }

    seguirPerfil(idSeguidor: number, idSeguido: number): void {
        const perfilSeguidor = this._repositorioDePerfis.consultar(idSeguidor);
        const perfilSeguido = this._repositorioDePerfis.consultar(idSeguido);

        if (perfilSeguidor && perfilSeguido) {
            perfilSeguidor.seguir(perfilSeguido);
        } else {
            console.log("Perfis não encontrados.");
        }
    }


    deixarDeSeguirPerfil(idSeguidor: number, idSeguido: number): void {
        const perfilSeguidor = this._repositorioDePerfis.consultar(idSeguidor);
        const perfilSeguido = this._repositorioDePerfis.consultar(idSeguido);

        if (perfilSeguidor && perfilSeguido) {
            perfilSeguidor.deixarDeSeguir(perfilSeguido);
        } else {
            console.log("Perfis não encontrados.");
        }
    }


    listarSeguidoresPerfil(idPerfil: number): void {
        const perfil = this._repositorioDePerfis.consultar(idPerfil);

        if (perfil) {
            const seguidores = perfil.listarSeguidores();
            if (seguidores.length > 0) {
                console.log(`Seguidores de ${perfil.nome}:`);
                seguidores.forEach((seguidor) => {
                    console.log(`- ${seguidor.nome}`);
                });
            } else {
                console.log(`Nenhum seguidor para ${perfil.nome}.`);
            }
        } else {
            console.log("Perfil não encontrado.");
        }

    }


    listarPostagensSeguidorPerfil(idPerfil: number): void {
        const perfil = this._repositorioDePerfis.consultar(idPerfil);

        if (perfil) {
            const postagensSeguidor = perfil.listarPostagensSeguidor();
            if (postagensSeguidor.length > 0) {
                console.log(`Postagens dos seguidores de ${perfil.nome}:`);
                postagensSeguidor.forEach((postagem) => {
                    console.log(`- ${postagem.texto}`);
                });
            } else {
                console.log(`Nenhuma postagem dos seguidores de ${perfil.nome}.`);
            }
        } else {
            console.log("Perfil não encontrado.");
        }
    }
    
}


