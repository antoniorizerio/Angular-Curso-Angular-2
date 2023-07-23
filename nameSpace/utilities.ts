/** Um forma de organizar o código e é utilizado quando você deseja evitar:
1- Colisão de Nomes;
2- Antigos módulos internos do TypeScript;
3- Similar a módulos e apenas o que está exportado no namespace fica disponível para ser
   utilizado externamente;
-Existe um erro comum que é tratar um nameSpace como se fosse um módulo, o desenvolvedor pode ficar tentado
em exportar o próprio namespace, isso torna o namespace inútil, pois se vc quer tratar o namespace como
módulo, basta remover o namespace e exportar só o que é necessário.
**/
namespace Utilities {

    export class OperacoesCPF {

        constructor(public numCPF: string) {}

        qtdNumerosCorretos() {
            if(this.numCPF.length == 11 || this.numCPF.length == 14) {
                console.log("Tamanho do CPF correto = " + this.numCPF.length );
            }
        }
    }

    function calcDistance (distance: number) {
        console.log(`${distance * 2}`);
    }
}