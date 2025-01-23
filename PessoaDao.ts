// Importação da interface DaoInterface e das classes Pessoa e Concessionaria
import { DaoInterface } from './DAOinterface'
import Pessoa from './Pessoa'
import Concessionaria from './concessionaria'

// Implementação de uma classe PessoaDao que implementa a interface DaoInterface<Pessoa>
export class PessoaDao implements DaoInterface<Pessoa> {

    // Atributo nomeTabela, representando o nome da tabela associada ao DAO
    nomeTabela: string = 'tb_pessoa'

    // Método para inserir um objeto do tipo Pessoa
    inserir(object: Pessoa): boolean {
        console.log('logica de insert'); // Log indicando a execução da lógica de inserção
        return true; // Retorna true para indicar que a inserção foi bem-sucedida
    }

    // Método para atualizar um objeto do tipo Pessoa
    atualizar(object: Pessoa): boolean {
        console.log('logica update'); // Log indicando a execução da lógica de atualização
        return true; // Retorna true para indicar que a atualização foi bem-sucedida
    }

    // Método para remover um objeto do tipo Pessoa, usando um ID
    remover(id: number): Pessoa {
        console.log('logica delete'); // Log indicando a execução da lógica de remoção
        return new Pessoa('', ''); // Retorna uma nova instância de Pessoa com dados vazios (a implementação real deve remover o objeto do banco de dados)
    }

    // Método para selecionar um objeto do tipo Pessoa usando um ID
    selecionar(id: number): Pessoa {
        console.log('logica select'); // Log indicando a execução da lógica de seleção
        return new Pessoa('', ''); // Retorna uma nova instância de Pessoa com dados vazios (a implementação real deve buscar o objeto no banco de dados)
    }

    // Método para selecionar todos os objetos do tipo Pessoa
    selecionarTodos(): [any] {
        console.log('logica getAll'); // Log indicando a execução da lógica de seleção de todos os registros
        return [new Pessoa('', '')]; // Retorna um array com uma instância de Pessoa com dados vazios (a implementação real deve retornar uma lista de objetos do tipo Pessoa)
    }
}


/*
Comentários sobre o código:
Classe PessoaDao:

A classe PessoaDao implementa a interface DaoInterface<Pessoa>, o que permite a manipulação de objetos do tipo Pessoa em uma estrutura genérica de DAO. Isso significa que os métodos para inserir, atualizar, remover e selecionar pessoas são definidos de forma padronizada.
Atributo nomeTabela:

O atributo nomeTabela define o nome da tabela associada a este DAO, que neste caso é 'tb_pessoa'. Isso poderia ser utilizado em uma implementação real para definir a tabela no banco de dados.
Métodos CRUD (Criar, Ler, Atualizar, Deletar):

inserir(object: Pessoa): boolean: Este método simula a inserção de um objeto Pessoa. A lógica real de inserção deve envolver a persistência de dados em um banco de dados, mas aqui ele apenas imprime um log e retorna true.
atualizar(object: Pessoa): boolean: Semelhante ao método de inserção, ele simula a atualização de um objeto Pessoa e retorna true para indicar sucesso.
remover(id: number): Pessoa: Simula a remoção de um objeto Pessoa. Retorna uma nova instância de Pessoa com dados vazios. A implementação real deveria remover o objeto correspondente do banco de dados.
selecionar(id: number): Pessoa: Este método simula a seleção de uma pessoa com base em um ID, retornando uma instância de Pessoa com dados vazios. Na prática, ele deve buscar o objeto correspondente no banco de dados.
selecionarTodos(): [any]: Retorna todos os objetos Pessoa (simulado aqui com uma instância vazia). A implementação real deve retornar uma lista de objetos Pessoa recuperados de um banco de dados.
Uso de Pessoa com dados vazios:

Nos métodos que retornam objetos do tipo Pessoa (como remover, selecionar e selecionarTodos), o código retorna uma nova instância de Pessoa com dados vazios. Na implementação real, esses métodos devem interagir com um banco de dados, retornando ou removendo registros reais.
*/