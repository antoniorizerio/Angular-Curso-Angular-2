/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Alguns exemplos
var arrayTest = ["Hello", "98052", "101"];
// Validadores para usar
var arrayValidators = {};
arrayValidators["ZIP code"] = new Validation.ZipCodeValidator();
arrayValidators["Letters only"] = new Validation.LettersOnlyValidator();
// Mostrar qual string passou por qual validador
for (var _i = 0, arrayTest_1 = arrayTest; _i < arrayTest_1.length; _i++) {
    var s = arrayTest_1[_i];
    for (var name_1 in arrayValidators) {
        console.log("\"" + s + "\" - " + (arrayValidators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
