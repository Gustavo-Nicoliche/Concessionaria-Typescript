"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor() {
        // Declaração de propriedades protegidas da classe.
        // `modelo` armazena o modelo do veículo. Inicializado com uma string vazia.
        this.modelo = '';
        // `velocidade` armazena a velocidade atual do veículo. Inicializado com 0.
        this.velocidade = 0;
    }
    // Método público para acelerar o veículo, aumentando sua velocidade em 10.
    acelerar() {
        this.velocidade = this.velocidade + 10; // Incrementa a velocidade em 10.
    }
    // Método público para parar o veículo, ajustando a velocidade para 0.
    parar() {
        this.velocidade = 0; // Reseta a velocidade para 0.
    }
    // Método público para obter a velocidade atual do veículo.
    velocidadeAtual() {
        return this.velocidade; // Retorna a velocidade atual do veículo.
    }
}
exports.default = Veiculo;
/*
Comentários sobre o código:
Propriedades modelo e velocidade:

protected: As propriedades são protegidas, o que significa que estão acessíveis diretamente dentro da classe e em suas subclasses, mas não fora delas. Isso é útil para garantir encapsulamento enquanto permite personalizações nas subclasses.
Inicialização padrão:

modelo é inicializado como uma string vazia '', e velocidade como 0. Isso evita o problema de propriedades não inicializadas ao usar verificações estritas de inicialização no TypeScript.
Métodos públicos:

acelerar: Incrementa a propriedade velocidade em 10.
parar: Define a propriedade velocidade como 0, simulando a parada do veículo.
velocidadeAtual: Retorna o valor atual da propriedade velocidade.
Flexibilidade para subclasses:

Como a propriedade modelo é protegida, subclasses como Carro ou Moto podem sobrescrevê-la ou manipulá-la diretamente, mantendo o comportamento genérico da classe Veiculo.
*/ 
