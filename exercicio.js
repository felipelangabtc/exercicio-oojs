class Veiculo {
    constructor(marca, modelo, ano) {

    if (new.target === Veiculo) {
        throw new Error("Veículo é uma classe abstrata e não pode ser instanciada diretamente.");
    }
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    
    dirigir() {
        console.log(`${this.marca} ${this.modelo} foi desbloqueado.`);
    }
    
    exibirInformacoes() {
    console.log(`Veículo: ${this.ano} ${this.marca} ${this.modelo}`);
    }
}

    class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano);
    this.portas = portas;
    }
    
    dirigir() {
    console.log(`O carro ${this.marca} ${this.modelo} com ${this.portas} portas foi desbloqueado.`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, temSidecar = false) {
    super(marca, modelo, ano);
    this.temSidecar = temSidecar;
    }
    
    dirigir() {
    console.log(`A moto ${this.marca} ${this.modelo} foi desbloqueada${this.temSidecar ? " com sidecar" : ""}.`);
    }
}

    const carro1 = new Carro("Hyundai", "Veloster", 2013, 3);
    const moto1 = new Moto("Honda", "CG 160", 2022);
    const carro2 = new Carro("Honda", "Civic", 2021, 4);

    carro1.exibirInformacoes();       
    carro1.dirigir();                

    moto1.exibirInformacoes();  
    moto1.dirigir();           

    carro2.exibirInformacoes();      
    carro2.dirigir();                 
