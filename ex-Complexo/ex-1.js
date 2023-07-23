"use strict";
exports.__esModule = true;
var TiposNaves;
(function (TiposNaves) {
    TiposNaves["TieFighter"] = "TieFighter";
    TiposNaves["Recolhimento"] = "Recolhimento";
    TiposNaves["Reposicao"] = "Reposicao";
})(TiposNaves || (TiposNaves = {}));
var ships = [
    {
        nome: 'Marinha',
        type: TiposNaves.TieFighter
    },
    {
        nome: 'Exercito',
        type: TiposNaves.TieFighter
    },
    {
        nome: 'Aeronautica',
        type: TiposNaves.Recolhimento
    },
];
var tieFighters = ships.filter(function (ship) {
    return ship.type === 'TieFighter';
});
var tieFightersArrow = ships.filter(function (ship) { return ship.type === 'TieFighter'; });
var callTieFighters;
callTieFighters = function (name) { return console.log('Nome passado = ' + name); };
function c(num1, num2) {
    console.log(num2);
    var i = num2 || 1;
    console.log(i);
    return num1 + i;
}
console.log(c(1, 3));
