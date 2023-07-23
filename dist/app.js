"use strict";
exports.__esModule = true;
var base_ships_1 = require("./exemplo-nave/base-ships"); // Importando Módulo //
var starfighter_1 = require("./exemplo-nave/starfighter"); // Importando Módulo //
var _ = require("lodash"); // se chama 'namespace import', importando tudo do Lodash e colocando
// com o nome '_' {underline} que é a variável padrão do lodash; 
/* Importando um namespace */
/// <reference path="./nameSpace/utilities.ts" /> 
/*
 "Let" permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
  Isso é inverso da keyword "var", que define uma variável globalmente ou no escopo inteiro de uma função,
   independentemente do escopo de bloco.
*/
var message = "Primeiro programa em TypeScript-1";
console.log(message);
var episode = 41;
console.log("Episódio número " + episode);
episode = episode + 1;
console.log("Próximo episódio é " + episode);
var favoritoAndroid; // Declarando de modo implícito o tipo 'any';
favoritoAndroid = "BB-8";
favoritoAndroid = 10;
console.log("Meu favorito Android é " + favoritoAndroid);
var isSuficienteBaterVelocidade = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
// o uso da Crase '`' se chama TemplateString, não usa Aspas Simples ', mas sim o simbolo da crase
// terminando tbm com o simbolo da crase, permitindo colocar expressões utilizando essa sintaxe
// ${chamada a uma função ou uma variável que vc tenha declarado em um dos escopos}
// EX: ${distance}
// EX: ${isSuficienteBaterVelocidade(distance) ? 'YES' : 'NO'} -> expressão ternária;
console.log("A distancia de " + distance + " \u00E9 suficiente para batar a velocidade?   \n       " + (isSuficienteBaterVelocidade(distance) ? 'YES' : 'NO'));
var callArrow = function (name) { return console.log("Do You copy, " + name + "?"); };
callArrow('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
// Uso de templateString.
console.log("inc(5, 1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
var ship = new base_ships_1.Nave("HyperPropulsor");
ship.entrarHyperSpace();
var falconNv = new starfighter_1.NaveMilleniumFalcon();
falconNv.entrarHyperSpace();
var goodforTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcons good for the job? " + (goodforTheJob(falconNv) ? 'yes' : 'no'));
console.log(_.pad("Typescript Examples", 21, "=")); // uso do loadsh.. biblioteca javascript //
