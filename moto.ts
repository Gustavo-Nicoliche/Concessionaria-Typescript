import Veiculo from "./veiculo";
// Importa a classe base `Veiculo`, que será estendida pela classe `Moto`.

class Moto extends Veiculo {
    // Declaração da classe `Moto` que herda as propriedades e métodos da classe `Veiculo`.

    public acelerar(): void {
        // Método público que redefine (override) o comportamento de acelerar.
        this.velocidade = this.velocidade + 20
        // Incrementa a velocidade da moto em 20 ao ser chamado.
    }
}

export default Moto;
// Exporta a classe `Moto` como padrão, permitindo seu uso em outros módulos.




/*
Explicação dos detalhes:
Herança com extends:
A classe Moto herda de Veiculo, assumindo que Veiculo tenha propriedades e métodos como velocidade.

Redefinição do método acelerar:

A classe Moto redefine o método acelerar, que pode estar originalmente presente em Veiculo.
Aqui, a lógica específica para Moto é adicionar 20 à propriedade velocidade sempre que o método for chamado.
Uso de this.velocidade:

Presume-se que velocidade seja uma propriedade de Veiculo e que seja acessível diretamente em Moto. Para isso, a propriedade precisa ser declarada como protected ou public na classe base.
Observação:
Certifique-se de que velocidade esteja declarada e inicializada corretamente em Veiculo, de preferência como protected, para que as subclasses possam acessá-la.
Essa estrutura permite criar outras subclasses como Carro e Moto, cada uma com comportamentos distintos no método acelerar.
*/