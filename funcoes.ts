
/**
 * Função nomeada e com retorno void.
 * @param name - uma string.
 */
function useTheForce (name: string): void {
    console.log('Usando a força, '.concat(name));
}
//

/**
 * Nesse caso você chama a função pelo termo 'menorCorrida';
 * Retorno tipado; Retorna verdadeiro caso o parametro 'segundos' seja menor que 12.
 * @param segundos 
 */
let menorCorrida = function(segundos: number): boolean {
    return segundos < 12;
}
console.log(menorCorrida(10));
////

/** Exemplo do Uso de uma 'função anônima' e depois de um 'ARROW Function' equivalente a essa função **/

let ships = ['ola', 'vida', 'casa', 'tieFighter'];

// Uso de Função anonima para Iteragir dentro do Array;
let tieFighters = ships.filter(
    function (ship){
        return ship.match('tieFighter');
    }
)

console.log(tieFighters);
// Uso de Função anonima para Iteragir dentro do Array;

// ARROW function: forma abreviada em que você não precisa digitar a palavra 'function' e nem a palavra 'return'.
// Separando os parametros da implementação através de uma seta 'ship => ship.match...' Lado esquerdo parâmetros do lado direito a implementação.
let ties = ships.filter( ship => ship.match('tieFighter') );
console.log(ties);

// Declarando que uma variável será um função e informando os Tipos dos Argumentos e qual será o retorno //
let call: (name: string) => void;
// ** //
// Atribuo o valor da variável que será a própria função //
call = name => console.log("Do you copy, "+ name + "?")
call("R2");

/**
 * Função para mostrar que os parametros em Typescript são obrigatórios.
 * 
 * @param velocidade 
 * @param valor 
 */
function incrementar(velocidade: number, valor: number) : number {
    return velocidade + valor;
}
console.log(incrementar(5,1));

/**
 * Função para mostrar que os parametros em Typescript podem ser opcionais
 * marcando '?' logo após o nome do parâmetro.
 * 
 * @param velocidade 
 * @param valor 
 */
function incrementarOpcional(velocidade: number, valor?: number) : number {
    let i = valor || 1; // Analisa se o primeiro valor está presente e então retorna ele, caso contrário
                       // retorna 1;
    return velocidade + i;
}
console.log(incrementarOpcional(6));

/**
 * Função com o segundo parâmetro sendo iniciado com o valor 1;
 * 
 * @param veloc 
 * @param valor 
 */
function paramIniciado(veloc: number, valor: number = 1) : number {
    return veloc + valor;
}
console.log(paramIniciado(6,6));
console.log(paramIniciado(6));

//*****/ Parâmetros REST: último parâmetro de uma função pode receber múltiplos valores, Transformando em um
        // array dentro da função;

//** */ Uso de Arrays sem o uso de parâmetros REST //        
function somatorioArray(array: number[]): number {
    return array.reduce( (a , b) => a+b, 0 );
}

function somatorioArrayAnonima(array: number[]): number {
    return array.reduce( function(a,b){
        console.log('Valor de a= '+a);
        console.log('Valor de b= '+b);
        return a+b;
    }, 0 );
}
console.log(somatorioArray([10,20,30,50]));
//** */ Uso de Arrays sem o uso de parâmetros REST //

//** Uso de parâmetros REST, com 3 pontos antes do parâmetro, fazendo com que os números sejam chamados 
// unicamente por virgulas */
function somatorioParamRest(...array: number[]) {
    return array.reduce( (a , b) => a+b, 0 );
}
console.log(somatorioParamRest(10,20,30,50));
//** Uso de parâmetros REST */