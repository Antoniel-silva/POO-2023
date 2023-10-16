// criando uma classe chamada automóvel 

class automóvel{
    placa: string
    

    constructor(_placa: string){
        this.placa = _placa
    }
}

//agora a claase veiculo herda de automóvel

class veiculo extends automóvel{
    ano: number

    constructor(_placa: string, _ano: number){
        super(_placa)
        this.ano = _ano
    }
}

//classe carro herda de veiculo

class carro extends veiculo{
    modelo: string

    constructor(_placa: string, _ano: number, _modelo: string){
        super(_placa, _ano)
        this.modelo = _modelo
    }

}

//classe carroEletrico herda de carro

class carroEletrico extends carro{
    autonomiaBateria: number

    constructor(_placa: string, _ano: number, _modelo: string, _autonomiaBateria: number){
        super(_placa, _ano, _modelo)
        this.autonomiaBateria = _autonomiaBateria
    }
}