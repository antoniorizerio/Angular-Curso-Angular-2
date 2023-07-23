/** Um forma de organizar o código e é utilizado quando você deseja evitar:
1- Colisão de Nomes;
2- Antigos módulos internos do TypeScript;
3- Similar a módulos e apenas o que está exportado no namespace fica disponível para ser
   utilizado externamente;
**/
var Utilities;
(function (Utilities) {
    var OperacoesCPF = /** @class */ (function () {
        function OperacoesCPF(numCPF) {
            this.numCPF = numCPF;
        }
        OperacoesCPF.prototype.qtdNumerosCorretos = function () {
            if (this.numCPF.length == 11 || this.numCPF.length == 14) {
                console.log("Tamanho do CPF correto = " + this.numCPF.length);
            }
        };
        return OperacoesCPF;
    }());
    Utilities.OperacoesCPF = OperacoesCPF;
    function calcDistance(distance) {
        console.log("" + distance * 2);
    }
})(Utilities || (Utilities = {}));
