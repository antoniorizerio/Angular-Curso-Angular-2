interface StringValidator {
    isAcceptable(s: string) : boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidato implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
}

class ZipCodeValidato implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
}

// Alguns exemplos
let strings = ["Hello", "98052", "101"];
// Validadores para usar
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidato();
validators["Letters only"] = new LettersOnlyValidato();
// Mostrar qual string passou por qual validador
for (let s of strings) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
  }
}