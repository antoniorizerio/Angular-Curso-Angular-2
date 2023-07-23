// Caso o segundo parametro não seja informado, o TS permite vc indicar um valor ou expressao
// logo apos a declaração do parametro
function incValorInitial( speed: number, inc: number = 1) : number {
    console.log("speed || 1: "+ speed || 1);
    console.log("inc: "+ inc);
    return speed + inc;
}
console.log("chamando função: incValorInitial(5)= " + incValorInitial(5));
console.log("chamando função: incValorInitial(5,6)= " + incValorInitial(5,6));
console.log(Math.random());


export class SpaceBase {

    public jump() {
        console.log('Jump SpaceBase');
    }
}

/** Atributos, construtores e métodos */
export class Space extends SpaceBase {

    private propulsor: string;

    constructor (propulsor: string, private cor: string) {
        super();
        this.propulsor = propulsor;
    }

    public jump() {
        super.jump();
        console.log("Jump Subclasse");
    }
}

let falcon = new Space('Athena', 'verde');
falcon.jump();