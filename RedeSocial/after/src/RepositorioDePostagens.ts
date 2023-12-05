export class RepositorioDePostagens {
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
