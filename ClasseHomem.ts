class ClasseHomem extends ClasseHumano implements ContainerHumano  {

    camisa: boolean;
    calca: boolean;
    short: boolean;
    
    constructor() {
        super("verdes", "grandes", "torto");
    }
    
    andar() {
        if(Math.random() >= 0.5) {
            super.andar();
        } else { console.log("Não ando mais.")}
    }

}
let ch = new ClasseHomem();
ch.andar();