"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Novaredesocial_1 = require("./Novaredesocial");
var readline = require("readline");
var redeSocial = new Novaredesocial_1.RedeSocial();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var opcao = '';
function getUserInput(prompt) {
    return new Promise(function (resolve) {
        rl.question(prompt, function (answer) {
            resolve(answer);
        });
    });
}
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, idNovoPerfil, _b, nomeNovoPerfil, emailNovoPerfil, novoPerfil, idPerfilConsulta, _c, perfilConsultado, idPerfilPostagem, _d, textoPostagem, idPostagem, _e, perfilPostagem, novaPostagem, idPostagemConsulta, _f, postagensConsultadas, postagemConsultada, idPostagemCurtir, _g, postagensCurtir, postagemCurtir, idPostagemDescurtir, _h, postagensDescurtir, postagemDescurtir, idPerfilExibirPostagens, _j, perfilExibirPostagens, postagensPerfil, idPerfilSeguir, _k, perfilSeguir, idPerfilDeixarDeSeguir, _l, perfilDeixarDeSeguir, idPerfilListarSeguidores, _m, perfilListarSeguidores, seguidores, idPerfilExibirPostagensSeguidores, _o, perfilExibirPostagensSeguidores, seguidores;
        return __generator(this, function (_p) {
            switch (_p.label) {
                case 0:
                    console.log('\n<<<<<<<<<<<<<Bem vindo a nova Rede Social>>>>>>>>>>>>\n');
                    console.log("----------------------------------------------------------------------------");
                    console.log("");
                    console.log("Digite uma opção:");
                    console.log("");
                    console.log('1 - Incluir Perfil\n2 - Consultar Perfil\n3 - Incluir Postagem\n' +
                        '4 - Consultar posatgem\n5 - Curtir postagem\n6 - Descurtir postagem\n' +
                        '7 - Decrementar Visualizações\n8 - Exibir postagens por perfil\n9 - Exibir postagens por hashtag\n' +
                        '10 - Seguir perfil\n11 - Deixar de seguir perfil\n12 - Listar seguidores\n13 - Exibir postagem dos seguidores\n' +
                        '0 - Sair\n');
                    return [4 /*yield*/, getUserInput('Opção: ')];
                case 1:
                    opcao = _p.sent();
                    _a = opcao;
                    switch (_a) {
                        case "1": return [3 /*break*/, 2];
                        case "2": return [3 /*break*/, 6];
                        case "3": return [3 /*break*/, 8];
                        case "4": return [3 /*break*/, 12];
                        case "5": return [3 /*break*/, 14];
                        case "6": return [3 /*break*/, 16];
                        case "7": return [3 /*break*/, 18];
                        case "8": return [3 /*break*/, 19];
                        case "9": return [3 /*break*/, 21];
                        case "10": return [3 /*break*/, 22];
                        case "11": return [3 /*break*/, 24];
                        case "12": return [3 /*break*/, 26];
                        case "13": return [3 /*break*/, 28];
                    }
                    return [3 /*break*/, 30];
                case 2:
                    console.log("Opção 1 selecionada: Incluir Perfil");
                    _b = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o id do novo perfil: ")];
                case 3:
                    idNovoPerfil = _b.apply(void 0, [_p.sent()]);
                    return [4 /*yield*/, getUserInput("Digite o nome do novo perfil: ")];
                case 4:
                    nomeNovoPerfil = _p.sent();
                    return [4 /*yield*/, getUserInput("Agora digite o email do novo perfil: ")];
                case 5:
                    emailNovoPerfil = _p.sent();
                    novoPerfil = new Novaredesocial_1.Perfil(idNovoPerfil, nomeNovoPerfil, emailNovoPerfil, [], [], []);
                    redeSocial.incluirPerfil(novoPerfil);
                    console.log("Opera\u00E7\u00E3o finalizada!");
                    return [3 /*break*/, 30];
                case 6:
                    console.log("Opção 2 selecionada: Consultar Perfil");
                    _c = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID do perfil a ser consultado: ")];
                case 7:
                    idPerfilConsulta = _c.apply(void 0, [_p.sent()]);
                    perfilConsultado = redeSocial.consultarPerfil(idPerfilConsulta);
                    if (perfilConsultado) {
                        console.log("Perfil encontrado - ID: ".concat(perfilConsultado.id, ", Nome: ").concat(perfilConsultado.nome, ", Email: ").concat(perfilConsultado.email));
                    }
                    else {
                        console.log("Perfil não encontrado.");
                    }
                    return [3 /*break*/, 30];
                case 8:
                    console.log("Opção 3 selecionada: Incluir Postagem");
                    _d = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID do perfil que está fazendo a postagem: ")];
                case 9:
                    idPerfilPostagem = _d.apply(void 0, [_p.sent()]);
                    return [4 /*yield*/, getUserInput("Digite o texto da postagem: ")];
                case 10:
                    textoPostagem = _p.sent();
                    _e = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID para a postagem: ")];
                case 11:
                    idPostagem = _e.apply(void 0, [_p.sent()]);
                    perfilPostagem = redeSocial.consultarPerfil(idPerfilPostagem);
                    if (perfilPostagem) {
                        novaPostagem = new Novaredesocial_1.Postagem(idPostagem, // ID fornecida pelo usuário
                        textoPostagem, 0, 0, new Date(), perfilPostagem);
                        redeSocial.incluirPostagem(novaPostagem);
                        console.log("Nova postagem adicionada com sucesso para o perfil ".concat(perfilPostagem.nome, "."));
                    }
                    else {
                        console.log("Perfil não encontrado.");
                    }
                    return [3 /*break*/, 30];
                case 12:
                    _f = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID da postagem a ser consultada: ")];
                case 13:
                    idPostagemConsulta = _f.apply(void 0, [_p.sent()]);
                    postagensConsultadas = redeSocial.consultarPostagens(undefined, idPostagemConsulta);
                    if (postagensConsultadas.length > 0) {
                        postagemConsultada = postagensConsultadas[0];
                        console.log("Postagem encontrada:");
                        console.log("ID: ".concat(postagemConsultada.id));
                        console.log("Texto: ".concat(postagemConsultada.texto));
                        console.log("Curtidas: ".concat(postagemConsultada.curtidas));
                        console.log("Descurtidas: ".concat(postagemConsultada.descurtidas));
                        console.log("Data: ".concat(postagemConsultada.data));
                    }
                    else {
                        console.log("Postagem não encontrada.");
                    }
                    return [3 /*break*/, 30];
                case 14:
                    console.log("Opção 5 selecionada: Curtir Postagem");
                    _g = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID da postagem a ser curtida: ")];
                case 15:
                    idPostagemCurtir = _g.apply(void 0, [_p.sent()]);
                    postagensCurtir = redeSocial.consultarPostagens(undefined, idPostagemCurtir);
                    if (postagensCurtir.length > 0) {
                        postagemCurtir = postagensCurtir[0];
                        postagemCurtir.curtir();
                        console.log("Postagem ".concat(postagemCurtir.id, " curtida com sucesso."));
                    }
                    else {
                        console.log("Postagem não encontrada.");
                    }
                    return [3 /*break*/, 30];
                case 16:
                    console.log("Opção 6 selecionada: Descurtir Postagem");
                    _h = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID da postagem a ser descurtida: ")];
                case 17:
                    idPostagemDescurtir = _h.apply(void 0, [_p.sent()]);
                    postagensDescurtir = redeSocial.consultarPostagens(undefined, idPostagemDescurtir);
                    if (postagensDescurtir.length > 0) {
                        postagemDescurtir = postagensDescurtir[0];
                        // Chama o método descurtir na instância de Postagem
                        postagemDescurtir.descurtir();
                        console.log("Postagem ".concat(postagemDescurtir.id, " descurtida com sucesso."));
                    }
                    else {
                        console.log("Postagem não encontrada.");
                    }
                    return [3 /*break*/, 30];
                case 18:
                    console.log("Opção 7 selecionada: Decrementar Visualizações");
                    return [3 /*break*/, 30];
                case 19:
                    console.log("Opção 8 selecionada: Exibir Postagens por Perfil");
                    _j = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID do perfil para exibir as postagens: ")];
                case 20:
                    idPerfilExibirPostagens = _j.apply(void 0, [_p.sent()]);
                    perfilExibirPostagens = redeSocial.consultarPerfil(idPerfilExibirPostagens);
                    // Verifica se o perfil foi encontrado
                    if (perfilExibirPostagens) {
                        postagensPerfil = redeSocial.consultarPostagens(undefined, undefined, undefined, perfilExibirPostagens);
                        if (postagensPerfil.length > 0) {
                            console.log("Postagens do perfil ".concat(idPerfilExibirPostagens, ":"));
                            postagensPerfil.forEach(function (postagem) {
                                console.log("ID: ".concat(postagem.id, ", Texto: ").concat(postagem.texto));
                            });
                        }
                        else {
                            console.log("Nenhuma postagem encontrada para o perfil informado.");
                        }
                    }
                    else {
                        console.log("Perfil não encontrado.");
                    }
                    return [3 /*break*/, 30];
                case 21:
                    console.log("Exibir postagens por hashtag");
                    return [3 /*break*/, 30];
                case 22:
                    console.log("Opção 10 selecionada: Seguir Perfil");
                    _k = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID do perfil que você deseja seguir: ")];
                case 23:
                    idPerfilSeguir = _k.apply(void 0, [_p.sent()]);
                    perfilSeguir = redeSocial.consultarPerfil(idPerfilSeguir);
                    // Verifica se o perfil foi encontrado
                    if (perfilSeguir) {
                        // Chama o método seguir na instância de Perfil
                        perfilSeguir.seguir(perfilSeguir);
                        console.log("Voc\u00EA est\u00E1 agora seguindo o perfil ".concat(idPerfilSeguir, "."));
                    }
                    else {
                        console.log("Perfil não encontrado.");
                    }
                    return [3 /*break*/, 30];
                case 24:
                    console.log("Opção 11 selecionada: Deixar de Seguir Perfil");
                    _l = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID do perfil que você deseja deixar de seguir: ")];
                case 25:
                    idPerfilDeixarDeSeguir = _l.apply(void 0, [_p.sent()]);
                    perfilDeixarDeSeguir = redeSocial.consultarPerfil(idPerfilDeixarDeSeguir);
                    // Verifica se o perfil foi encontrado
                    if (perfilDeixarDeSeguir) {
                        // Chama o método deixarDeSeguir na instância de Perfil
                        perfilDeixarDeSeguir.deixarDeSeguir(perfilDeixarDeSeguir);
                        console.log("Voc\u00EA deixou de seguir o perfil ".concat(idPerfilDeixarDeSeguir, "."));
                    }
                    else {
                        console.log("Perfil não encontrado.");
                    }
                    _p.label = 26;
                case 26:
                    console.log("Opção 12 selecionada: Listar Seguidores");
                    _m = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID do perfil para listar os seguidores: ")];
                case 27:
                    idPerfilListarSeguidores = _m.apply(void 0, [_p.sent()]);
                    perfilListarSeguidores = redeSocial.consultarPerfil(idPerfilListarSeguidores);
                    // Verifica se o perfil foi encontrado
                    if (perfilListarSeguidores) {
                        seguidores = perfilListarSeguidores.listarSeguidores();
                        if (seguidores.length > 0) {
                            console.log("Seguidores do perfil ".concat(idPerfilListarSeguidores, ":"));
                            seguidores.forEach(function (seguidor) {
                                console.log("ID: ".concat(seguidor.id, ", Nome: ").concat(seguidor.nome));
                            });
                        }
                        else {
                            console.log("Nenhum seguidor encontrado para o perfil informado.");
                        }
                    }
                    else {
                        console.log("Perfil não encontrado.");
                    }
                    return [3 /*break*/, 30];
                case 28:
                    console.log("Opção 13 selecionada: Exibir Postagens dos Seguidores");
                    _o = parseInt;
                    return [4 /*yield*/, getUserInput("Digite o ID do perfil para exibir as postagens dos seguidores: ")];
                case 29:
                    idPerfilExibirPostagensSeguidores = _o.apply(void 0, [_p.sent()]);
                    perfilExibirPostagensSeguidores = redeSocial.consultarPerfil(idPerfilExibirPostagensSeguidores);
                    // Verifica se o perfil foi encontrado
                    if (perfilExibirPostagensSeguidores) {
                        seguidores = perfilExibirPostagensSeguidores.listarSeguidores();
                        if (seguidores.length > 0) {
                            console.log("Postagens dos seguidores do perfil ".concat(idPerfilExibirPostagensSeguidores, ":"));
                            seguidores.forEach(function (seguidor) {
                                var postagensSeguidor = redeSocial.consultarPostagens(undefined, undefined, undefined, seguidor);
                                if (postagensSeguidor.length > 0) {
                                    console.log("Postagens de ".concat(seguidor.nome, ":"));
                                    postagensSeguidor.forEach(function (postagem) {
                                        console.log("ID: ".concat(postagem.id, ", Texto: ").concat(postagem.texto));
                                    });
                                }
                                else {
                                    console.log("Nenhuma postagem encontrada para ".concat(seguidor.nome, "."));
                                }
                            });
                        }
                        else {
                            console.log("O perfil não tem seguidores.");
                        }
                    }
                    else {
                        console.log("Perfil não encontrado.");
                    }
                    return [3 /*break*/, 30];
                case 30: return [4 /*yield*/, getUserInput('\nOperação finalizada. Pressione <Enter> para continuar')];
                case 31:
                    _p.sent();
                    _p.label = 32;
                case 32:
                    if (opcao !== "0") return [3 /*break*/, 0];
                    _p.label = 33;
                case 33:
                    console.log("Aplicação encerrada");
                    rl.close();
                    process.exit(0);
                    return [2 /*return*/];
            }
        });
    });
})();
