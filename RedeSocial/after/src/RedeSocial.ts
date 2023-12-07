import { Postagem } from './Postagem';
import { RepositorioDePostagens } from './RepositorioDePostagens';
import { RepositorioDePerfis } from './RepositorioDePerfis';
import { Perfil } from './Perfil';
import { PostagemAvancada } from './PostagemAvancada';

export class RedeSocial {
    private _repositorioDePostagens: RepositorioDePostagens;
    private _repositorioDePerfis: RepositorioDePerfis;
    

    constructor() {
        this._repositorioDePostagens = new RepositorioDePostagens();
        this._repositorioDePerfis = new RepositorioDePerfis();
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
