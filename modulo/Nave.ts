// Representa uma nave bem básica //
class Nave {

    /**
     * Construtor com sintaxe reduzida, declarando o atributo da classe como parâmetro
     * do construtor: public propulsor: string;
     * 
     * @param propulsor 
     */
    constructor (public propulsor: string) {}

    entrarHyperSpace() {
        console.log(`Entrando no Hyperspace com ${this.propulsor}`);
    }
}

export{Nave};