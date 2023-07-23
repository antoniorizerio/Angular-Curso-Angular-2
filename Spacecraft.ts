class Spacecraft {

    propulsor: string;

    constructor(propulsor: string) {
        this.propulsor = propulsor;
    }

    /**
     * Outra forma de declarar um construtor
     
       constructor(public propulsor: string) {
           this.propulsor = propulsor;
       }

    */

    pularDentroDoEspaco () {
        console.log("Entrando dentro do HyperSpace com " + this.propulsor);
    }

}