export class PostagemAvancada extends Postagem {
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
