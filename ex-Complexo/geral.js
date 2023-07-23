"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Space = exports.SpaceBase = void 0;
// Caso o segundo parametro não seja informado, o TS permite vc indicar um valor ou expressao
// logo apos a declaração do parametro
function incValorInitial(speed, inc) {
    if (inc === void 0) { inc = 1; }
    console.log("speed || 1: " + speed || 1);
    console.log("inc: " + inc);
    return speed + inc;
}
console.log("chamando função: incValorInitial(5)= " + incValorInitial(5));
console.log("chamando função: incValorInitial(5,6)= " + incValorInitial(5, 6));
console.log(Math.random());
var SpaceBase = /** @class */ (function () {
    function SpaceBase() {
    }
    SpaceBase.prototype.jump = function () {
        console.log('Jump SpaceBase');
    };
    return SpaceBase;
}());
exports.SpaceBase = SpaceBase;
/** Atributos, construtores e métodos */
var Space = /** @class */ (function (_super) {
    __extends(Space, _super);
    function Space(propulsor, cor) {
        var _this = _super.call(this) || this;
        _this.cor = cor;
        _this.propulsor = propulsor;
        return _this;
    }
    Space.prototype.jump = function () {
        _super.prototype.jump.call(this);
        console.log("Jump Subclasse");
    };
    return Space;
}(SpaceBase));
exports.Space = Space;
var falcon = new Space('Athena', 'verde');
falcon.jump();
