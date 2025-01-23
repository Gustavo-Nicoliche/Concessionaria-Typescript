"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    // Construtor para inicializar o endereço e a lista de carros.
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco; // Define o endereço da concessionária.
        this.listaDeCarros = listaDeCarros; // Define a lista de carros disponíveis.
    }
    // Método público para fornecer o endereço da concessionária.
    fornecerEndereco() {
        return this.endereco; // Retorna o endereço da concessionária.
    }
    // Método público para mostrar a lista de carros disponíveis.
    mostrarlistaDeCarros() {
        return this.listaDeCarros; // Retorna a lista de carros.
    }
    // Método público para fornecer os horários de funcionamento da concessionária.
    fornecerHorariosDeFuncionamento() {
        return 'De segunda a sexta-feira das 8h00 às 18h00 e sábado das 8h00 às 12h00';
        // Retorna uma string com os horários de funcionamento.
    }
}
exports.default = Concessionaria;
/*
Comentários sobre o código:
Implementação da Interface (implements):
A classe Concessionaria implementa a interface concessionariaInterface, o que garante que todos os métodos e propriedades definidos na interface sejam obrigatoriamente implementados nesta classe.

Propriedades privadas:

endereco: Armazena o endereço da concessionária.
listaDeCarros: Uma lista do tipo Carro[] que contém os veículos disponíveis na concessionária.
Construtor:

Inicializa endereco e listaDeCarros com os valores passados ao criar uma instância da classe.
Métodos públicos:

fornecerEndereco: Retorna o endereço da concessionária.
mostrarlistaDeCarros: Retorna a lista de carros disponíveis na concessionária.
fornecerHorariosDeFuncionamento: Retorna os horários de funcionamento da concessionária.
Conformidade com a interface:

A implementação de fornecerHorariosDeFuncionamento é obrigatória devido à interface concessionariaInterface. Isso adiciona consistência e um contrato para o comportamento da classe.
Benefícios do Design:
Modularidade: A interface separa a definição do comportamento da implementação, permitindo maior flexibilidade e reutilização.
Encapsulamento: As propriedades são privadas, garantindo que somente os métodos públicos possam acessá-las ou modificá-las.
*/ 
