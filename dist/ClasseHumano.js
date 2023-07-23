var ClasseHumano = /** @class */ (function () {
    function ClasseHumano(olhos, pernas, nariz) {
        this.olhos = olhos;
        this.pernas = pernas;
        this.nariz = nariz;
    }
    ClasseHumano.prototype.andar = function () {
        console.log("Ando como um Humano");
    };
    return ClasseHumano;
}());
