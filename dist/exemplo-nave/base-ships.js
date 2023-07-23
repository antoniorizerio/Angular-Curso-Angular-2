"use strict";
/** Módulo: unidade que contém Classes, Interfaces, Funções e Variáveis com objetivo de deixar o
 * conteúdo de um arquivo isolado do restante da aplicação.
 * -Organiza o conteúdo;
 *
 * **/
exports.__esModule = true;
exports.Nave = void 0;
// Representa uma nave bem básica //
var Nave = /** @class */ (function () {
    /**
     * Construtor com sintaxe reduzida, declarando o atributo da classe como parâmetro
     * do construtor: public propulsor: string;
     *
     * @param propulsor
     */
    function Nave(propulsor) {
        this.propulsor = propulsor;
    }
    Nave.prototype.entrarHyperSpace = function () {
        console.log("Entrando no Hyperspace com " + this.propulsor);
    };
    return Nave;
}());
exports.Nave = Nave;
