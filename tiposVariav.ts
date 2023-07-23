let space = 10;

let nome: string;
nome="Han Solo";

let nomeSemTipo = "R2-D2";

console.log(nome);
console.log(nomeSemTipo);

let tipoBool:   boolean;
let tipoNumber: number;
let tipoString: string;
let tipoAny:    any; // Pode-se atribuir qualquer valor para a variável //

tipoAny = "teste";
tipoAny = 12;

// Arrays //
let playersNoValues: number[];             // Variável array sem nenhum valor declarado;
let playersNumb: number[] = [1,2,3];       // Declaro o tipo seguido de colchetes;
let playersArray: Array<number> = [1,2,3]; // Declaro o tipo Array associando com o tipo generico dentro dos sinais <>;
let playersInferido = [1,2,3,"d"];         // Inferido pelo valor da variável;