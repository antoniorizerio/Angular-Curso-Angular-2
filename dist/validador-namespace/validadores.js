var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var LettersOnlyValidato = /** @class */ (function () {
    function LettersOnlyValidato() {
    }
    LettersOnlyValidato.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidato;
}());
var ZipCodeValidato = /** @class */ (function () {
    function ZipCodeValidato() {
    }
    ZipCodeValidato.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidato;
}());
// Alguns exemplos
var strings = ["Hello", "98052", "101"];
// Validadores para usar
var validators = {};
validators["ZIP code"] = new ZipCodeValidato();
validators["Letters only"] = new LettersOnlyValidato();
// Mostrar qual string passou por qual validador
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log("'" + s + "' " + (isMatch ? "matches" : "does not match") + " '" + name_1 + "'.");
    }
}
