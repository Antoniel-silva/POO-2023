export class Postagem {
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

