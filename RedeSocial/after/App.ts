import { Perfil } from './src/Perfil';
import { Postagem } from './src/Postagem';
import { RedeSocial } from './src/RedeSocial';

import * as readline from 'readline';

const redeSocial = new RedeSocial();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let opcao: string = '';

function getUserInput(prompt: string): Promise<string> {
    
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer);
        });
    });
}

(async function main() {
    do {
        console.log('\n<<<<<<<<<<<<<Bem vindo a nova Rede Social>>>>>>>>>>>>\n');
        console.log("----------------------------------------------------------------------------")
        console.log("")
        console.log("Digite uma opção:")
        console.log("")
        console.log('1 - Incluir Perfil\n2 - Consultar Perfil\n3 - Incluir Postagem\n' +
            '4 - Consultar Postagem\n5 - Curtir Postagem\n6 - Descurtir Postagem\n' +
            '7 - Decrementar Visualizações\n8 - Exibir postagens por perfil\n9 - Exibir postagens por hashtag\n' +
            '10 - Seguir perfil\n11 - Deixar de seguir perfil\n12 - Listar seguidores\n13 - Exibir postagem dos seguidores\n' +
            '0 - Sair\n');
        
        opcao = await getUserInput('Opção: ');

        switch (opcao) {
            case "1":
                console.log("Opção 1 selecionada: Incluir Perfil");

                let idNovoPerfil = parseInt(await getUserInput("Digite o id do novo perfil: "));
                let nomeNovoPerfil = await getUserInput("Digite o nome do novo perfil: ");
                let emailNovoPerfil = await getUserInput("Agora digite o email do novo perfil: ");
                
                let novoPerfil = new Perfil(idNovoPerfil, nomeNovoPerfil, emailNovoPerfil, [], [], [] );
                
                
                redeSocial.incluirPerfil(novoPerfil)
                               
                console.log(`Operação finalizada!`);
                              
                break;

            case "2":
                console.log("Opção 2 selecionada: Consultar Perfil");
                let idPerfilConsulta = parseInt(await getUserInput("Digite o ID do perfil a ser consultado: "));
                const perfilConsultado = redeSocial.consultarPerfil(idPerfilConsulta);

                if (perfilConsultado) {
                    console.log(`Perfil encontrado - ID: ${perfilConsultado.id}, Nome: ${perfilConsultado.nome}, Email: ${perfilConsultado.email}`);
                } else {
                    console.log("Perfil não encontrado.");
                }

                break;
            case "3":
                console.log("Opção 3 selecionada: Incluir Postagem");
               
                let idPerfilPostagem = parseInt(await getUserInput("Digite o ID do perfil que está fazendo a postagem: "));
                let textoPostagem = await getUserInput("Digite o texto da postagem: ");
                let idPostagem = parseInt(await getUserInput("Digite o ID para a postagem: "));

                               
                const perfilPostagem = redeSocial.consultarPerfil(idPerfilPostagem);

                if (perfilPostagem) {
                    const novaPostagem = new Postagem(
                        idPostagem, // ID fornecida pelo usuário
                        textoPostagem,
                        0, 
                        0, 
                        new Date(), 
                        perfilPostagem
                    );

                
                    redeSocial.incluirPostagem(novaPostagem);

                    console.log(`Nova postagem adicionada com sucesso para o perfil ${perfilPostagem.nome}.`);
                } else {
                    console.log("Perfil não encontrado.");
                }
                


                break;
            case "4":
                let idPostagemConsulta = parseInt(await getUserInput("Digite o ID da postagem a ser consultada: "));

                           
                // Chama o método consultarPostagens na instância de RedeSocial
                const postagensConsultadas = redeSocial.consultarPostagens(undefined, idPostagemConsulta);
            
                if (postagensConsultadas.length > 0) {
                    const postagemConsultada = postagensConsultadas[0];
            
                    console.log("Postagem encontrada:");
                    console.log(`ID: ${postagemConsultada.id}`);
                    
                    console.log(`Texto: ${postagemConsultada.texto}`);
                    console.log(`Curtidas: ${postagemConsultada.curtidas}`);
                    console.log(`Descurtidas: ${postagemConsultada.descurtidas}`);
                    console.log(`Data: ${postagemConsultada.data}`);
                } else {
                    console.log("Postagem não encontrada.");
                }
            
                break;

            case "5": // Opção para curtir postagem
                console.log("Opção 5 selecionada: Curtir Postagem");
            
                let idPostagemCurtir = parseInt(await getUserInput("Digite o ID da postagem a ser curtida: "));
                                      
                
                const postagensCurtir = redeSocial.consultarPostagens(undefined, idPostagemCurtir);
            
                if (postagensCurtir.length > 0) {
                    const postagemCurtir = postagensCurtir[0];
            
                    
                    postagemCurtir.curtir();
            
                    console.log(`Postagem ${postagemCurtir.id} curtida com sucesso.`);
                } else {
                    console.log("Postagem não encontrada.");
                }
            
                break;

            case "6": // Opção para descurtir postagem
            console.log("Opção 6 selecionada: Descurtir Postagem");

            let idPostagemDescurtir = parseInt(await getUserInput("Digite o ID da postagem a ser descurtida: "));

            

            // Chama o método consultarPostagens na instância de RedeSocial
            const postagensDescurtir = redeSocial.consultarPostagens(undefined, idPostagemDescurtir);

            if (postagensDescurtir.length > 0) {
                const postagemDescurtir = postagensDescurtir[0];

                // Chama o método descurtir na instância de Postagem
                postagemDescurtir.descurtir();

                console.log(`Postagem ${postagemDescurtir.id} descurtida com sucesso.`);
            } else {
                console.log("Postagem não encontrada.");
            }

            break;


            case "7":
            console.log("Opção 7 selecionada: Decrementar Visualizações");

            
            break;

            case "8": // Opção para exibir postagens por perfil
            console.log("Opção 8 selecionada: Exibir Postagens por Perfil");

            let idPerfilExibirPostagens = parseInt(await getUserInput("Digite o ID do perfil para exibir as postagens: "));

                        
            const perfilExibirPostagens = redeSocial.consultarPerfil(idPerfilExibirPostagens);

            // Verifica se o perfil foi encontrado
            if (perfilExibirPostagens) {
                // Chama o método consultarPostagens na instância de RedeSocial
                const postagensPerfil = redeSocial.consultarPostagens(undefined, undefined, undefined, perfilExibirPostagens);

                if (postagensPerfil.length > 0) {
                    console.log(`Postagens do perfil ${idPerfilExibirPostagens}:`);
                    postagensPerfil.forEach((postagem) => {
                        console.log(`ID: ${postagem.id}, Texto: ${postagem.texto}`);
                    });
                } else {
                    console.log("Nenhuma postagem encontrada para o perfil informado.");
                }
            } else {
                console.log("Perfil não encontrado.");
            }

            break;

            case "9": // Opção para exibir postagens por perfil
            console.log("Exibir postagens por hashtag");

            break;

            case "10": // Opção para seguir um perfil
            console.log("Opção 10 selecionada: Seguir Perfil");

            let idPerfilSeguir = parseInt(await getUserInput("Digite o ID do perfil que você deseja seguir: "));

            
            // Chama o método consultarPerfil na instância de RedeSocial
            const perfilSeguir = redeSocial.consultarPerfil(idPerfilSeguir);

            // Verifica se o perfil foi encontrado
            if (perfilSeguir) {
                // Chama o método seguir na instância de Perfil
                perfilSeguir.seguir(perfilSeguir);

                console.log(`Você está agora seguindo o perfil ${idPerfilSeguir}.`);
            } else {
                console.log("Perfil não encontrado.");
            }

            break;    
            
            
            case "11": // Opção para deixar de seguir um perfil
            console.log("Opção 11 selecionada: Deixar de Seguir Perfil");

            let idPerfilDeixarDeSeguir = parseInt(await getUserInput("Digite o ID do perfil que você deseja deixar de seguir: "));

            
            // Chama o método consultarPerfil na instância de RedeSocial
            const perfilDeixarDeSeguir = redeSocial.consultarPerfil(idPerfilDeixarDeSeguir);

            // Verifica se o perfil foi encontrado
            if (perfilDeixarDeSeguir) {
                // Chama o método deixarDeSeguir na instância de Perfil
                perfilDeixarDeSeguir.deixarDeSeguir(perfilDeixarDeSeguir);

                console.log(`Você deixou de seguir o perfil ${idPerfilDeixarDeSeguir}.`);
            } else {
                console.log("Perfil não encontrado.");
            }


            case "12": // Opção para listar seguidores
            console.log("Opção 12 selecionada: Listar Seguidores");

            let idPerfilListarSeguidores = parseInt(await getUserInput("Digite o ID do perfil para listar os seguidores: "));

            
            // Chama o método consultarPerfil na instância de RedeSocial
            const perfilListarSeguidores = redeSocial.consultarPerfil(idPerfilListarSeguidores);

            // Verifica se o perfil foi encontrado
            if (perfilListarSeguidores) {
                // Chama o método listarSeguidores na instância de Perfil
                const seguidores = perfilListarSeguidores.listarSeguidores();

                if (seguidores.length > 0) {
                    console.log(`Seguidores do perfil ${idPerfilListarSeguidores}:`);
                    seguidores.forEach((seguidor) => {
                        console.log(`ID: ${seguidor.id}, Nome: ${seguidor.nome}`);
                    });
                } else {
                    console.log("Nenhum seguidor encontrado para o perfil informado.");
                }
            } else {
                console.log("Perfil não encontrado.");
            }

            break;


            case "13": // Opção para exibir postagens dos seguidores
            console.log("Opção 13 selecionada: Exibir Postagens dos Seguidores");

            let idPerfilExibirPostagensSeguidores = parseInt(await getUserInput("Digite o ID do perfil para exibir as postagens dos seguidores: "));

            
            // Chama o método consultarPerfil na instância de RedeSocial
            const perfilExibirPostagensSeguidores = redeSocial.consultarPerfil(idPerfilExibirPostagensSeguidores);

            // Verifica se o perfil foi encontrado
            if (perfilExibirPostagensSeguidores) {
                // Chama o método listarSeguidores na instância de Perfil
                const seguidores = perfilExibirPostagensSeguidores.listarSeguidores();

                if (seguidores.length > 0) {
                    console.log(`Postagens dos seguidores do perfil ${idPerfilExibirPostagensSeguidores}:`);
                    seguidores.forEach((seguidor) => {
                        const postagensSeguidor = redeSocial.consultarPostagens(undefined, undefined, undefined, seguidor);
                        if (postagensSeguidor.length > 0) {
                            console.log(`Postagens de ${seguidor.nome}:`);
                            postagensSeguidor.forEach((postagem) => {
                                console.log(`ID: ${postagem.id}, Texto: ${postagem.texto}`);
                            });
                        } else {
                            console.log(`Nenhuma postagem encontrada para ${seguidor.nome}.`);
                        }
                    });
                } else {
                    console.log("O perfil não tem seguidores.");
                }
            } else {
                console.log("Perfil não encontrado.");
            }

            break;
              
        }

        await getUserInput('\nOperação finalizada. Pressione <Enter> para continuar');
    } while (opcao !== "0");

    console.log("Aplicação encerrada");
    
    rl.close();
    process.exit(0);
})();

