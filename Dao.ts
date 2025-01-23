// Importação da interface DaoInterface genérica para implementação
import { DaoInterface } from "./DAOinterface";

// Implementação de uma classe genérica Dao que implementa a interface DaoInterface<T>
export class Dao<T> implements DaoInterface<T> {

    // Atributo nomeTabela, representando o nome da tabela associada ao DAO (ainda não definido na classe)
    nomeTabela: string = '';

    // Método para inserir um objeto do tipo genérico T
    inserir(object: T): boolean {
        console.log('logica de insert'); // Log indicando a execução da lógica de inserção
        return true; // Retorna true para indicar que a inserção foi bem-sucedida
    }

    // Método para atualizar um objeto do tipo genérico T
    atualizar(object: T): boolean {
        console.log('logica update'); // Log indicando a execução da lógica de atualização
        return true; // Retorna true para indicar que a atualização foi bem-sucedida
    }

    // Método para remover um objeto do tipo genérico T, usando um ID
    remover(id: number): T {
        console.log('logica delete'); // Log indicando a execução da lógica de remoção
        return Object(); // Retorna um novo objeto genérico vazio (a implementação real deve retornar um objeto válido)
    }

    // Método para selecionar um objeto do tipo genérico T usando um ID
    selecionar(id: number): T {
        console.log('logica select'); // Log indicando a execução da lógica de seleção
        return Object(); // Retorna um novo objeto genérico vazio (a implementação real deve retornar um objeto válido)
    }

    // Método para selecionar todos os objetos do tipo genérico T
    selecionarTodos(): [T] {
        console.log('logica getAll'); // Log indicando a execução da lógica de seleção de todos os registros
        return Object(); // Retorna um objeto vazio, mas deve retornar um array de objetos T
    }
}

/*
Comentários sobre o código:
Classe Genérica Dao:

A classe Dao é genérica, ou seja, ela pode ser usada para manipular objetos de diferentes tipos, conforme especificado no parâmetro de tipo T. Essa abordagem permite que você crie DAOs para diferentes tipos de objetos sem precisar repetir o código.
Atributo nomeTabela:

O atributo nomeTabela é uma string que representa o nome da tabela associada no banco de dados. Neste código, ele está vazio, e pode ser definido nas subclasses ou instâncias específicas.
Métodos CRUD:

inserir(object: T): boolean: Este método simula a inserção de um objeto do tipo T e retorna true para indicar que a operação foi bem-sucedida. A implementação real deve envolver uma operação de inserção no banco de dados.
atualizar(object: T): boolean: Similar ao método de inserção, ele simula a atualização de um objeto do tipo T e retorna true.
remover(id: number): T: Simula a remoção de um objeto com base em um ID e retorna um novo objeto genérico vazio. A implementação real deve remover o objeto correspondente do banco de dados e retornar o objeto removido.
selecionar(id: number): T: Este método simula a seleção de um objeto com base em um ID e retorna um novo objeto vazio. A implementação real deve buscar o objeto no banco de dados.
selecionarTodos(): [T]: Retorna todos os objetos do tipo T (simulado com um objeto vazio), mas a implementação real deve retornar uma lista de objetos.
Uso do Object():

Nos métodos remover, selecionar e selecionarTodos, o retorno de Object() é um placeholder (representação vazia). Na implementação real, esses métodos devem retornar dados concretos ou instâncias válidas do tipo T.
Futuro Aperfeiçoamento:

Este modelo de DAO pode ser melhorado ao conectar-se a um banco de dados real e usar métodos de acesso aos dados concretos, como a inserção de registros em tabelas específicas, consulta de registros com base em IDs, etc.
*/