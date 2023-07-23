/** Um forma de organizar o código e é utilizado quando você deseja evitar:
1- Colisão de Nomes;
2- Antigos módulos internos do TypeScript;
3- Similar a módulos e apenas o que está exportado no namespace fica disponível para ser
   utilizado externamente;
**/
var Utilities1;
(function (Utilities1) {
    var OperacoesCPF1 = /** @class */ (function () {
        function OperacoesCPF1(numCPF) {
            this.numCPF = numCPF;
        }
        OperacoesCPF1.prototype.qtdNumerosCorretos = function () {
            if (this.numCPF.length == 11 || this.numCPF.length == 14) {
                console.log("Tamanho do CPF correto = " + this.numCPF.length);
            }
        };
        return OperacoesCPF1;
    }());
    Utilities1.OperacoesCPF1 = OperacoesCPF1;
    function calcDistance(distance) {
        console.log("" + distance * 2);
    }
})(Utilities1 || (Utilities1 = {}));
