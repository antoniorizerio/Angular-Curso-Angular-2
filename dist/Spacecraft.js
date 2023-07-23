var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    /**
     * Outra forma de declarar um construtor
     
       constructor(public propulsor: string) {
           this.propulsor = propulsor;
       }

    */
    Spacecraft.prototype.pularDentroDoEspaco = function () {
        console.log("Entrando dentro do HyperSpace com " + this.propulsor);
    };
    return Spacecraft;
}());
