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
exports.NaveMilleniumFalcon = void 0;
var Nave_1 = require("./Nave");
var NaveMilleniumFalcon = /** @class */ (function (_super) {
    __extends(NaveMilleniumFalcon, _super);
    function NaveMilleniumFalcon() {
        var _this = _super.call(this, "Propulsor R20-F") || this;
        _this.cargoContainer = 4;
        return _this;
    }
    NaveMilleniumFalcon.prototype.entrarHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.entrarHyperSpace.call(this);
        }
        else {
            console.log('Failed ao entrar no HyperSpace');
        }
    };
    return NaveMilleniumFalcon;
}(Nave_1.Nave));
exports.NaveMilleniumFalcon = NaveMilleniumFalcon;
