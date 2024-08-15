class Pizza {
    constructor(base, molho, cobertura, queijo){
        this.base = base
        this.molho = molho
        this.cobertura = cobertura
        this.queijo = queijo
    }
    pedido(){
        console.log(`Olá, seu pedido foi concluído com base: ${this.base}, molho: ${this.molho}, cobertura: ${this.cobertura}, e queijo: ${this.queijo}.`)
}

}

const User = new Pizza("Pan", "Tomate", "Calabresa", "Mussarela");
const User1 = new Pizza("Recheada de Catupiry", "Tomate", "Fango", "Mussarela");

User.pedido();
User1.pedido();
