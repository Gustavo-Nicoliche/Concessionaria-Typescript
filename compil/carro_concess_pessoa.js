"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro")); // Importa a classe Carro
const Pessoa_1 = __importDefault(require("./Pessoa")); // Importa a classe Pessoa
const concessionaria_1 = __importDefault(require("./concessionaria")); // Importa a classe Concessionaria
// ----- CRIAR CARROS ------
let carroA = new Carro_1.default('Dodge Journey', 4); // Criação de um carro com modelo 'Dodge Journey' e 4 portas
let carroB = new Carro_1.default('i30', 4); // Criação de um carro com modelo 'i30' e 4 portas
let carroC = new Carro_1.default('Kia Cerato', 4); // Criação de um carro com modelo 'Kia Cerato' e 4 portas
// Lista de carros disponíveis na concessionária
let listaDeCarros = [carroA, carroB, carroC]; // Array com os carros criados acima
// Instanciação de uma concessionária com a lista de carros
let concessionaria = new concessionaria_1.default('Av Paulista', listaDeCarros);
// Cria uma nova concessionária localizada na 'Av Paulista', que possui a lista de carros criada acima
// ----- COMPRAR CARRO ------
let cliente = new Pessoa_1.default('Gustavo', 'i30');
// Criação de um cliente com nome 'Gustavo' e carro preferido 'i30'
// Percorre a lista de carros da concessionária para encontrar o carro preferido do cliente
concessionaria.mostrarlistaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // Verifica se o modelo do carro atual corresponde ao carro preferido do cliente
        cliente.comprarCarro(carro); // Atribui o carro ao cliente, simulando a compra
    }
});
console.log(cliente.dizerQueCarroTem());
// Exibe no console o carro que o cliente possui após a compra
