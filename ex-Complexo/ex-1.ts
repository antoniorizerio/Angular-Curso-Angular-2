export interface nave {
    nome: string;
    type: TiposNaves;
}

enum TiposNaves {
  TieFighter = 'TieFighter',
  Recolhimento = 'Recolhimento',
  Reposicao = 'Reposicao'
}

const ships: nave[] = [
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
    ]

let tieFighters = ships.filter(function(ship) {
    return ship.type === 'TieFighter';
})

let tieFightersArrow = ships.filter((ship) => ship.type === 'TieFighter');

let callTieFighters: (name: string) => void;
callTieFighters = name => console.log('Nome passado = ' + name);

function c (num1:number, num2?:number) {
  console.log(num2);
    let i = num2 || 1;
  console.log(i);
  return num1 + i;  
}

console.log(c(1,3));