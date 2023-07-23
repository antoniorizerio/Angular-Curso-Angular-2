var ClasseConstrutor = /** @class */ (function () {
    function ClasseConstrutor(propulsor) {
        this.propulsor = propulsor;
    }
    ClasseConstrutor.prototype.pularDentroDoEspaco = function () {
        console.log("Entrando dentro do HyperSpace com " + this.propulsor);
    };
    return ClasseConstrutor;
}());
