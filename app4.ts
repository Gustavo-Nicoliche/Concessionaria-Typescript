// Importação das classes necessárias: Concessionaria, Pessoa, Dao
// As importações de ConcessionariaDao e PessoaDao estão comentadas, indicando que talvez se queira usar essas classes mais tarde
import Concessionaria from './concessionaria'
import Pessoa from './Pessoa'
import { Dao } from './Dao'

// Instanciação de objetos das classes Concessionaria e Pessoa com dados vazios
let concessionaria = new Concessionaria('',[]); // Criação de um objeto Concessionaria com nome vazio e uma lista vazia
let pessoa: Pessoa = new Pessoa('', ''); // Criação de um objeto Pessoa com nome e carro preferido vazios

// Instanciação de objetos Dao para gerenciar Concessionaria e Pessoa
let dao3: Dao<Concessionaria> = new Dao<Concessionaria>(); // Criando um DAO genérico para Concessionaria
let dao4: Dao<Pessoa> = new Dao<Pessoa>(); // Criando um DAO genérico para Pessoa

// Chamadas aos métodos do DAO: inserção da concessionária e remoção de uma pessoa
dao3.inserir(concessionaria); // Chama o método 'inserir' do DAO para adicionar a concessionária
dao4.remover(5); // Chama o método 'remover' do DAO para remover uma pessoa com o ID 5


/*
Comentários sobre o código:
Instanciação das classes:

O código começa instanciando um objeto Concessionaria e um objeto Pessoa, ambos com dados vazios. Esses objetos podem ser usados para testes, mas na prática, você provavelmente usaria dados reais ao instanciá-los.
Uso do Dao:

Em vez de usar as classes ConcessionariaDao ou PessoaDao que estão comentadas, o código opta por usar a classe genérica Dao para manipular objetos Concessionaria e Pessoa. Isso permite que a lógica de inserção e remoção seja tratada de forma genérica, sem precisar de implementações específicas para cada tipo de objeto.
Métodos do Dao:

dao3.inserir(concessionaria): Este método tenta "inserir" o objeto concessionaria usando o DAO genérico. No entanto, como o método inserir do Dao apenas exibe um log e retorna true, nada será realmente persistido.
dao4.remover(5): O método remover tenta remover uma pessoa com o ID 5. Porém, como o método remover da classe Dao apenas retorna um objeto vazio (não interage com um banco de dados real), a remoção não terá efeito real.
Flexibilidade do Dao:

A classe Dao foi projetada para ser reutilizável com diferentes tipos de objetos, como Concessionaria e Pessoa. Isso é vantajoso para manter o código mais flexível e modular, evitando a duplicação de código.
*/