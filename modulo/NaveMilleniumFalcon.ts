import {Nave} from "./Nave";
import {ContainerNave} from "./ContainerNave"
/// reference path = '../nameSpace/utilities.ts'

class NaveMilleniumFalcon extends Nave implements ContainerNave {

    cargoContainer: number;
    
    constructor() {
        super("Propulsor R20-F");
        this.cargoContainer = 4;
    }

    entrarHyperSpace() {
        //new Utilities.OperacoesCPF('022.824.224-55');
        if(Math.random() >= 0.5) {
            super.entrarHyperSpace();
        } else {console.log('Failed ao entrar no HyperSpace')}       
    }
}

export{NaveMilleniumFalcon};