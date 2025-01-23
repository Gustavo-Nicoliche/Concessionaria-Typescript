"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = __importDefault(require("./veiculo"));
// Importa a classe base `Veiculo`, que será usada como superclasse para `Carro`
class Carro extends veiculo_1.default {
    // Construtor da classe: usado para inicializar as propriedades ao criar um objeto
    constructor(modelo, numeroDePortas) {
        super();
        // Chama o construtor da classe base `Veiculo`, necessário ao estender uma classe em TypeScript
        this.modelo = modelo; // Define o modelo do carro herdado de `Veiculo`
        this.numeroDePortas = numeroDePortas; // Inicializa o número de portas específico do carro
    }
}
exports.default = Carro;
/*
Explicação dos detalhes:
Herança com extends:
A classe Carro estende a classe Veiculo, o que significa que ela herda as propriedades e métodos definidos em Veiculo.

Uso de super():
Ao usar extends, o construtor da subclasse deve chamar o construtor da superclasse com super(). Isso garante que a inicialização na classe base ocorra corretamente antes da inicialização específica da subclasse.

Propriedade modelo:
A propriedade modelo provavelmente está definida na classe Veiculo. A subclasse Carro a utiliza diretamente, assumindo que ela seja acessível.

Propriedade adicional:
A propriedade numeroDePortas é específica da classe Carro, sendo adicionada e inicializada no construtor.
*/ 
