class ClasseHumano {

    public olhos:  string;
    pernas: string;
    nariz:  string;

    constructor(olhos:  string, pernas:  string, nariz:  string){
        this.olhos  = olhos;
        this.pernas = pernas;
        this.nariz  = nariz; 
    }

    andar () {
        console.log("Ando como um Humano");
    }
}