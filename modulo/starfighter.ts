import {Nave, ContainerNave} from './base-ships'; // Importando um Modulo // 

class NaveMilleniumFalcon extends Nave implements ContainerNave {

    cargoContainers: number;
    
    constructor() {
        super("Propulsor R20-F");
        this.cargoContainers = 4;
    }
    
    entrarHyperSpace() {
        if(Math.random() >= 0.5) {
            super.entrarHyperSpace();
        } else {console.log('Failed ao entrar no HyperSpace')}       
    }
}
export{NaveMilleniumFalcon}