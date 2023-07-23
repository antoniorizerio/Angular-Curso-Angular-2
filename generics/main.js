//function meuFilter(array: unknown[], call: (value: string) => boolean);
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayFiltradoOriginal = array.filter(function (value) { return value < 5; });
console.log(arrayFiltradoOriginal);
// Declarando que uma variável será um função e informando os Tipos dos Argumentos e qual será o retorno //
var call1;
var call2;
// ** //
// Atribuo o valor da variável que será a própria função //
call1 = function (name) { return console.log("Do you copy, " + name + "?"); };
call2 = function (name) {
    console.log("Do you copy, " + name + "?");
};
call1("R2");
