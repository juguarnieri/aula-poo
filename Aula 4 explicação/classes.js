class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade}, anos de idade e tenho ${this.altura} de altura`)
}

}

const User = new Pessoa("Lulu", 16, 1.58);
const User1 = new Pessoa("Miguel", 18, 1.74);

User.seApresentar();

//console.log(User);
//console.log(User1);