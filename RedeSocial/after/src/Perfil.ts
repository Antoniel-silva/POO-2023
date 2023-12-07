import { Postagem } from './Postagem';

export class Perfil {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _postagens: Postagem[] = [];
    private _seguidores: Perfil[] = [];
    private _seguindo: Perfil[] = [];

    constructor(id: number, nome: string, email: string, postagens: Postagem[], seguidores: Perfil[], seguindo: Perfil[]) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._postagens = postagens;
        this._seguidores = seguidores;
        this._seguindo = seguindo;
    }

    get id(): number{
        return this._id;
    }

    get nome(): string{
        return this._nome;
    }

    get email(): string{
        return this._email;
    }

    get postagens(): Postagem[] {
        return this._postagens;
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
