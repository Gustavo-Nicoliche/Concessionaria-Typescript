"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const concessionaria_1 = __importDefault(require("./concessionaria"));
// Implementação da interface DaoInterface para o tipo Concessionaria
class ConcessionariaDao {
    constructor() {
        // Nome da tabela vinculada à lógica do DAO
        this.nomeTabela = 'tb_concessionaria';
    }
    // Método para inserir um objeto do tipo Concessionaria
    inserir(object) {
        console.log('logica de insert'); // Log que representa a lógica de inserção
        return true; // Retorna true para simular o sucesso da operação
    }
    // Método para atualizar um objeto do tipo Concessionaria
    atualizar(object) {
        console.log('logica update'); // Log que representa a lógica de atualização
        return true; // Retorna true para simular o sucesso da operação
    }
    // Método para remover uma Concessionaria pelo ID
    remover(id) {
        console.log('logica delete'); // Log que representa a lógica de remoção
        return new concessionaria_1.default('', []); // Retorna um objeto vazio como exemplo
    }
    // Método para selecionar uma Concessionaria pelo ID
    selecionar(id) {
        console.log('logica select'); // Log que representa a lógica de seleção
        return new concessionaria_1.default('', []); // Retorna um objeto vazio como exemplo
    }
    // Método para selecionar todas as Concessionarias
    selecionarTodos() {
        console.log('logica getAll'); // Log que representa a lógica de seleção de todos os registros
        return [new concessionaria_1.default('', [])]; // Retorna uma lista com um objeto vazio como exemplo
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
/*
Comentários sobre o código:
Implementação da Interface Genérica:

A classe ConcessionariaDao implementa a interface DaoInterface para o tipo específico Concessionaria. Isso garante que todos os métodos definidos na interface sejam implementados nesta classe.
Atributo nomeTabela:

O atributo nomeTabela indica o nome da tabela associada no banco de dados. Neste caso, é a tabela tb_concessionaria.
Método inserir:

Recebe um objeto do tipo Concessionaria e exibe uma mensagem indicando a execução da lógica de inserção. Retorna true como exemplo de sucesso.
Método atualizar:

Atualiza o registro no banco de dados com base no objeto passado. Exibe um log e retorna true.
Método remover:

Recebe um ID e exibe uma mensagem representando a lógica de remoção. Retorna uma instância vazia de Concessionaria.
Método selecionar:

Seleciona um registro no banco de dados com base no ID fornecido. Exibe um log e retorna uma instância vazia de Concessionaria.
Método selecionarTodos:

Retorna todos os registros da tabela. Exibe um log e retorna uma lista contendo uma instância vazia de Concessionaria.
*/ 
