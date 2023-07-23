type FilterCallback = (
    value: unknown, 
    index? : number, 
    array?: unknown[] 
) => boolean;

function meuFilter(array: unknown[], call: FilterCallback) {
    const novoArray = [];
    for(let i = 0; i < array.length; i++) {
        if(call(array[i])) {
            novoArray.push(array[i]);
        }
    }

    return novoArray;
}

const array = [1,2,3,4,5,6,7,8,9,10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);

console.log(arrayFiltradoOriginal);

// Declarando que uma variável será um função e informando os Tipos dos Argumentos e qual será o retorno //
let call1: (name: string) => void;
let call2: (name: string) => void;
// ** //
// Atribuo o valor da variável que será a própria função //
call1 = name => console.log("Do you copy, "+ name + "?")

call2 = function (name:string): void {
    console.log("Do you copy, "+ name + "?")
}

call1("R2");