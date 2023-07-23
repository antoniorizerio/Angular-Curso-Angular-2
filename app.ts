 import {Nave} from './modulo/Nave'; // Importando Módulo //
 import {ContainerNave} from './modulo/ContainerNave'; // Importando Módulo //
 import {NaveMilleniumFalcon} from './modulo/NaveMilleniumFalcon'; // Importando Módulo //

 import * as _ from 'lodash'; // se chama 'namespace import', importando tudo do Lodash e colocando
 // com o nome '_' {underline} que é a variável padrão do lodash; 

/* Importando um namespace */
/// <reference path="./nameSpace/utilities.ts" /> 

/*
 "Let" permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. 
  Isso é inverso da keyword "var", que define uma variável globalmente ou no escopo inteiro de uma função, 
   independentemente do escopo de bloco.
*/
let message: string = "Primeiro programa em TypeScript-1";
console.log(message);
//new Utilities.OperacoesCPF('d');
let episode: number = 41;
console.log("Episódio número " + episode);
episode = episode + 1;
console.log("Próximo episódio é " + episode);

let favoritoAndroid; // Declarando de modo implícito o tipo 'any';
favoritoAndroid = "BB-8";
favoritoAndroid = 10;
console.log("Meu favorito Android é " + favoritoAndroid);

let isSuficienteBaterVelocidade = function (parsecs: number) : boolean {
   return parsecs < 12;
}

let distance = 11;

let jogadores: number[] = [1,3,5];

// o uso da Crase '`' se chama TemplateString, não usa Aspas Simples ', mas sim o simbolo da crase
// terminando tbm com o simbolo da crase, permitindo colocar expressões utilizando essa sintaxe
// ${chamada a uma função ou uma variável que vc tenha declarado em um dos escopos}
// EX: ${distance}
// EX: ${isSuficienteBaterVelocidade(distance) ? 'YES' : 'NO'} -> expressão ternária;
console.log(`A distancia de ${distance} é suficiente para batar a velocidade?   
       ${isSuficienteBaterVelocidade(distance) ? 'YES' : 'NO'}`);

let callArrow = (name: string) => console.log(`Do You copy, ${name}?`);
callArrow('R2');

function inc (speed: number, inc: number = 1) : number {
   return speed + inc;
}
// Uso de templateString.
console.log(`inc(5, 1) = ${inc(5,1)}`);
console.log(`inc(5) = ${inc(5)}`);

let ship = new  Nave("HyperPropulsor");
ship.entrarHyperSpace();

let falconNv = new NaveMilleniumFalcon();
falconNv.entrarHyperSpace();

let goodforTheJob = ( ship: ContainerNave ) => ship.cargoContainer > 2;
console.log(`Is falcons good for the job? ${goodforTheJob(falconNv) ? 'yes' : 'no'}`);

console.log(_.pad("Typescript Examples", 21, "=")); // uso do loadsh.. biblioteca javascript //


let arrayNumerico: number[] = [1,2,3,4,5];

console.log( arrayNumerico.map( function (x, y , arrayNumerico) {
   return x + 3;

}).filter(function (x) {
   if(x % 2 == 0) {
      return x;
   }
}).forEach(x => console.log(x))

);
   
   
   //(x,y, arrayNumerico) => x + 3) );