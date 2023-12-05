"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = exports.repositorioDePostagens = exports.repositorioDePerfis = exports.PostagemAvancada = exports.Postagem = exports.Perfil = void 0;
var Perfil = /** @class */ (function () {
    function Perfil(id, nome, email, postagens, seguidores, seguindo) {
        this._postagens = [];
        this._seguidores = [];
        this._seguindo = [];
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._postagens = postagens;
        this._seguidores = seguidores;
        this._seguindo = seguindo;
    }
    Object.defineProperty(Perfil.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Perfil.prototype, "postagens", {
        get: function () {
            return this._postagens;
        },
        enumerable: false,
        configurable: true
    });
    Perfil.prototype.adicionarPostagem = function (postagem) {
        this._postagens.push(postagem);
    };
    Perfil.prototype.seguir = function (perfil) {
        if (!this._seguindo.includes(perfil) && perfil !== this) {
            this._seguindo.push(perfil);
            perfil.adicionarSeguidor(this);
            console.log("Agora voc\u00EA est\u00E1 seguindo ".concat(perfil.nome, "."));
        }
        else {
            console.log("Não é possível seguir este perfil.");
        }
    };
    Perfil.prototype.adicionarSeguidor = function (perfil) {
        if (!this._seguidores.includes(perfil)) {
            this._seguidores.push(perfil);
        }
    };
    Perfil.prototype.deixarDeSeguir = function (perfil) {
        var indexSeguido = this._seguindo.indexOf(perfil);
        var indexSeguidor = perfil._seguidores.indexOf(this);
        if (indexSeguido !== -1 && indexSeguidor !== -1) {
            this._seguindo.splice(indexSeguido, 1);
            perfil._seguidores.splice(indexSeguidor, 1);
            console.log("Voc\u00EA deixou de seguir ".concat(perfil.nome, "."));
        }
        else {
            console.log("Você não está seguindo este perfil.");
        }
    };
    Perfil.prototype.listarSeguidores = function () {
        return this._seguidores;
    };
    Perfil.prototype.listarPostagensSeguidor = function () {
        var postagensSeguidor = [];
        this._seguindo.forEach(function (perfilSeguido) {
            postagensSeguidor.push.apply(postagensSeguidor, perfilSeguido.postagens);
        });
        return postagensSeguidor;
    };
    return Perfil;
}());
exports.Perfil = Perfil;
var Postagem = /** @class */ (function () {
    function Postagem(id, texto, curtidas, descurtidas, data, perfil) {
        this._id = id;
        this._texto = texto;
        this._curtidas = curtidas;
        this._descurtidas = descurtidas;
        this._data = data;
        this._perfil = perfil;
    }
    Object.defineProperty(Postagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "texto", {
        get: function () {
            return this._texto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "curtidas", {
        get: function () {
            return this._curtidas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "descurtidas", {
        get: function () {
            return this._descurtidas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Postagem.prototype, "perfil", {
        get: function () {
            return this._perfil;
        },
        enumerable: false,
        configurable: true
    });
    Postagem.prototype.curtir = function () {
        this._curtidas++;
    };
    Postagem.prototype.descurtir = function () {
        this._descurtidas++;
    };
    Postagem.prototype.ehPopular = function () {
        return this._curtidas > this._descurtidas * 1.5;
    };
    return Postagem;
}());
exports.Postagem = Postagem;
var PostagemAvancada = /** @class */ (function (_super) {
    __extends(PostagemAvancada, _super);
    function PostagemAvancada(id, texto, curtidas, descurtidas, data, perfil, hashtags, visualizacoesRestantes) {
        var _this = _super.call(this, id, texto, curtidas, descurtidas, data, perfil) || this;
        _this._hashtags = [];
        _this._hashtags = hashtags;
        _this._visualizacoesRestantes = visualizacoesRestantes;
        return _this;
    }
    Object.defineProperty(PostagemAvancada.prototype, "hashtags", {
        get: function () {
            return this._hashtags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostagemAvancada.prototype, "visualizacoesRestantes", {
        get: function () {
            return this._visualizacoesRestantes;
        },
        enumerable: false,
        configurable: true
    });
    PostagemAvancada.prototype.adicionarHashtag = function (novaHashtag) {
        if (this.existeHashtag(novaHashtag)) {
            console.log("A hashtag '".concat(novaHashtag, "' j\u00E1 existe nesta postagem."));
        }
        else {
            this._hashtags.push(novaHashtag);
            console.log("Hashtag '".concat(novaHashtag, "' adicionada \u00E0 postagem."));
        }
    };
    PostagemAvancada.prototype.existeHashtag = function (hashtag) {
        return this._hashtags.includes(hashtag);
    };
    PostagemAvancada.prototype.decrementarVisualizacoes = function () {
        if (this._visualizacoesRestantes > 0) {
            this._visualizacoesRestantes--;
            console.log('Visualização decrementada com sucesso.');
        }
        else {
            console.log('Visualizações já esgotadas.');
        }
    };
    return PostagemAvancada;
}(Postagem));
exports.PostagemAvancada = PostagemAvancada;
var repositorioDePerfis = /** @class */ (function () {
    function repositorioDePerfis() {
        this._perfis = [];
    }
    repositorioDePerfis.prototype.adicionarPerfil = function (novoPerfil) {
        this._perfis.push(novoPerfil);
        //console.log('Novo perfil adicionado com sucesso.');
    };
    repositorioDePerfis.prototype.consultar = function (id, nome, email) {
        if (!id && !nome && !email) {
            return null;
        }
        var perfilEncontrado = this._perfis.find(function (perfil) {
            return (!id || perfil.id === id) && (!nome || perfil.nome === nome) && (!email || perfil.email === email);
        });
        return perfilEncontrado || null;
    };
    return repositorioDePerfis;
}());
exports.repositorioDePerfis = repositorioDePerfis;
var repositorioDePostagens = /** @class */ (function () {
    function repositorioDePostagens() {
        this._postagens = [];
    }
    repositorioDePostagens.prototype.incluir = function (postagem) {
        this._postagens.push(postagem);
        // Adiciona a postagem ao array de postagens do perfil associado (se existir)
        var perfil = postagem.perfil;
        if (perfil) {
            perfil.adicionarPostagem(postagem);
        }
    };
    repositorioDePostagens.prototype.consultar = function (hashtag, id, texto, perfil) {
        var postagensFiltradas = this._postagens;
        // Filtra por hashtag (se fornecida) e por tipo PostagemAvancada
        if (hashtag) {
            postagensFiltradas = postagensFiltradas.filter(function (postagem) {
                return postagem instanceof PostagemAvancada &&
                    postagem.hashtags.includes(hashtag);
            });
        }
        return postagensFiltradas;
    };
    repositorioDePostagens.prototype.consultarPorId = function (id) {
        var postagemEncontrada = this._postagens.find(function (postagem) { return postagem.id === id; });
        return postagemEncontrada || null;
    };
    return repositorioDePostagens;
}());
exports.repositorioDePostagens = repositorioDePostagens;
var RedeSocial = /** @class */ (function () {
    function RedeSocial() {
        this._repositorioDePostagens = new repositorioDePostagens();
        this._repositorioDePerfis = new repositorioDePerfis();
    }
    RedeSocial.prototype.incluirPerfil = function (perfil) {
        if (!perfil.id || !perfil.nome || !perfil.email) {
            console.error('Todos os atributos do perfil devem ser preenchidos.');
            return;
        }
        if (this._repositorioDePerfis.consultar(perfil.id, perfil.nome, perfil.email)) {
            console.error('Já existe um perfil com o mesmo id, nome ou e-mail.');
            return;
        }
        this._repositorioDePerfis.adicionarPerfil(perfil);
    };
    RedeSocial.prototype.consultarPerfil = function (id, nome, email) {
        return this._repositorioDePerfis.consultar(id, nome, email);
    };
    RedeSocial.prototype.incluirPostagem = function (postagem) {
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
    };
    RedeSocial.prototype.consultarPostagens = function (hashtag, id, texto, perfil) {
        return this._repositorioDePostagens.consultar(hashtag, id, texto, perfil);
    };
    RedeSocial.prototype.curtir = function (idPostagem) {
        var postagemEncontrada = this._repositorioDePostagens.consultarPorId(idPostagem);
        if (postagemEncontrada) {
            postagemEncontrada.curtir();
            console.log('Postagem curtida com sucesso.');
        }
        else {
            console.error('Postagem não encontrada.');
        }
    };
    RedeSocial.prototype.descurtir = function (idPostagem) {
        var postagemEncontrada = this._repositorioDePostagens.consultarPorId(idPostagem);
        if (postagemEncontrada) {
            postagemEncontrada.descurtir();
            console.log('Postagem descurtida com sucesso.');
        }
        else {
            console.error('Postagem não encontrada.');
        }
    };
    RedeSocial.prototype.decrementarVisualizacoes = function (postagem) {
        if (postagem) {
            postagem.decrementarVisualizacoes();
            console.log('Visualização decrementada com sucesso.');
        }
        else {
            console.error('Postagem não encontrada.');
        }
    };
    RedeSocial.prototype.exibirPostagensPorPerfil = function (id) {
        var perfil = this._repositorioDePerfis.consultar(id);
        if (perfil) {
            return perfil.postagens;
        }
        else {
            console.error('Perfil não encontrado.');
            return [];
        }
    };
    RedeSocial.prototype.exibirPostagensPorHashtag = function (hashtag) {
        var postagensAvancadas = this._repositorioDePostagens.consultar(hashtag);
        return postagensAvancadas.filter(function (postagem) { return postagem instanceof PostagemAvancada; });
    };
    RedeSocial.prototype.seguirPerfil = function (idSeguidor, idSeguido) {
        var perfilSeguidor = this._repositorioDePerfis.consultar(idSeguidor);
        var perfilSeguido = this._repositorioDePerfis.consultar(idSeguido);
        if (perfilSeguidor && perfilSeguido) {
            perfilSeguidor.seguir(perfilSeguido);
        }
        else {
            console.log("Perfis não encontrados.");
        }
    };
    RedeSocial.prototype.deixarDeSeguirPerfil = function (idSeguidor, idSeguido) {
        var perfilSeguidor = this._repositorioDePerfis.consultar(idSeguidor);
        var perfilSeguido = this._repositorioDePerfis.consultar(idSeguido);
        if (perfilSeguidor && perfilSeguido) {
            perfilSeguidor.deixarDeSeguir(perfilSeguido);
        }
        else {
            console.log("Perfis não encontrados.");
        }
    };
    RedeSocial.prototype.listarSeguidoresPerfil = function (idPerfil) {
        var perfil = this._repositorioDePerfis.consultar(idPerfil);
        if (perfil) {
            var seguidores = perfil.listarSeguidores();
            if (seguidores.length > 0) {
                console.log("Seguidores de ".concat(perfil.nome, ":"));
                seguidores.forEach(function (seguidor) {
                    console.log("- ".concat(seguidor.nome));
                });
            }
            else {
                console.log("Nenhum seguidor para ".concat(perfil.nome, "."));
            }
        }
        else {
            console.log("Perfil não encontrado.");
        }
    };
    RedeSocial.prototype.listarPostagensSeguidorPerfil = function (idPerfil) {
        var perfil = this._repositorioDePerfis.consultar(idPerfil);
        if (perfil) {
            var postagensSeguidor = perfil.listarPostagensSeguidor();
            if (postagensSeguidor.length > 0) {
                console.log("Postagens dos seguidores de ".concat(perfil.nome, ":"));
                postagensSeguidor.forEach(function (postagem) {
                    console.log("- ".concat(postagem.texto));
                });
            }
            else {
                console.log("Nenhuma postagem dos seguidores de ".concat(perfil.nome, "."));
            }
        }
        else {
            console.log("Perfil não encontrado.");
        }
    };
    return RedeSocial;
}());
exports.RedeSocial = RedeSocial;
