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
var ClasseHomem = /** @class */ (function (_super) {
    __extends(ClasseHomem, _super);
    function ClasseHomem() {
        return _super.call(this, "verdes", "grandes", "torto") || this;
    }
    ClasseHomem.prototype.andar = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.andar.call(this);
        }
        else {
            console.log("Não ando mais.");
        }
    };
    return ClasseHomem;
}(ClasseHumano));
var ch = new ClasseHomem();
ch.andar();
