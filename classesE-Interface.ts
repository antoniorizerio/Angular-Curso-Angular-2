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

let nave = new Nave("Propulsor R20-F"); // Operador new //
nave.entrarHyperSpace();

class NaveMilleniumFalcon extends Nave implements ContainerNave {

    cargoContainer: number;
    
    constructor() {
        super("Propulsor R20-F");
        this.cargoContainer = 4;
    }

    entrarHyperSpace() {
        if(Math.random() >= 0.5) {
            super.entrarHyperSpace();
        } else {console.log('Failed ao entrar no HyperSpace')}       
    }
}

let falcon = new NaveMilleniumFalcon();
falcon.entrarHyperSpace();

interface ContainerNave {

    isAvaiable?: number; // Atributo opcional de ser implementado '?'; //
    cargoContainer: number;
}

let naveBoaParaOTrabalho = ( ship: ContainerNave ) => ship.cargoContainer > 2;
console.log(`A nave é boa para o trabalho = ${naveBoaParaOTrabalho(falcon) ? 'yes' : 'não'}`);