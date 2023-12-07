import { Perfil } from './Perfil';

export class RepositorioDePerfis implements RepositorioInterface {
    private _perfis: Perfil[] = [];

    adicionarPerfil(novoPerfil: Perfil): void {
        this._perfis.push(novoPerfil);
        console.log('Novo perfil adicionado com sucesso!');
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
