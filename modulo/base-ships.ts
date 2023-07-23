/** Módulo: unidade que contém Classes, Interfaces, Funções e Variáveis com objetivo de deixar o 
 * conteúdo de um arquivo isolado do restante da aplicação.
 * -Organiza o conteúdo;
 * -Garante o isolamento necessário para que não apareçam comportamentos estranhos com declarações
 *       com o mesmo nome.
 * * A partir do momento que vc exporta um elemento no arquivo, você está criando um módulo.
 * * Padrão é um tipo por arquivo.
 * **/

// Representa uma nave bem básica //
class Nave {

    /**
     * Construtor com sintaxe reduzida, declarando o atributo da classe como parâmetro
     * do construtor: public propulsor: string;
     * 
     * @param propulsor 
     */
    constructor (public propulsor: string) {}

    entrarHyperSpace() {
        console.log(`Entrando no Hyperspace com ${this.propulsor}`);
    }
}

export interface ContainerNave {
    cargoContainers: number;
}

export {Nave} // Nesse momento foi criado o módulo //