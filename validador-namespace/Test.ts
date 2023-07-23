/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Alguns exemplos
let arrayTest = ["Hello", "98052", "101"];

// Validadores para usar
let arrayValidators: { [s: string]: Validation.StringValidator } = {};
arrayValidators["ZIP code"] = new Validation.ZipCodeValidator();
arrayValidators["Letters only"] = new Validation.LettersOnlyValidator();

// Mostrar qual string passou por qual validador
for (let s of arrayTest) {
  for (let name in arrayValidators) {
    console.log( `"${s}" - ${arrayValidators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
  }
}