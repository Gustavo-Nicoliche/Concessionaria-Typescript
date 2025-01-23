# Projeto de Concessionária de Veículos

Este projeto simula a criação e o gerenciamento de uma concessionária de veículos, incluindo carros e motos, utilizando classes em TypeScript. O sistema permite a criação de veículos, pessoas, concessionárias, e a simulação de compra de veículos.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem utilizada para o desenvolvimento do projeto.
- **Node.js**: Ambiente de execução para rodar o código TypeScript.

## Estrutura do Projeto

O projeto é dividido em diversas classes que representam entidades de um sistema de concessionária de veículos. As principais classes são:

- **Veiculo**: Classe base para veículos em geral, com propriedades e métodos comuns a todos os veículos.
- **Carro**: Classe que estende a classe `Veiculo`, representando um carro, com propriedades específicas como número de portas.
- **Moto**: Classe que estende a classe `Veiculo`, representando uma moto, com a aceleração maior em relação ao carro.
- **Pessoa**: Representa uma pessoa que pode comprar um veículo.
- **Concessionaria**: Representa a concessionária de veículos, com uma lista de carros disponíveis e o horário de funcionamento.
- **Dao**: Interface genérica para operações de banco de dados (CRUD) e classes concretas para `ConcessionariaDao` e `PessoaDao`.
  
## Funcionalidades

- **Criar veículos**: A criação de veículos, como carros e motos, com propriedades como modelo, número de portas, e velocidade.
- **Acelerar veículos**: Aceleração de veículos (carros aumentam a velocidade em 10, enquanto motos aumentam a velocidade em 20).
- **Compra de veículos**: Uma pessoa pode escolher e comprar um carro de sua preferência da concessionária.
- **Horário de funcionamento da concessionária**: A concessionária possui horários de funcionamento que podem ser consultados.

## Como Rodar o Projeto

### 1. Clonar o repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/SEU-USUARIO/CONCESSIONARIA.git

2. Instalar as dependências
No diretório do projeto, instale as dependências com o npm:

npm install

3. Compilar o código TypeScript
Compile o código TypeScript utilizando o comando:

npx tsc

4. Rodar o projeto
Execute o projeto compilado com Node.js:

node dist/index.js


### Explicação do `README.md`:

1. **Introdução**: Descreve o que o projeto faz e suas funcionalidades principais.
2. **Tecnologias Utilizadas**: Lista as tecnologias usadas, como TypeScript e Node.js.
3. **Estrutura do Projeto**: Explica como o projeto está estruturado, incluindo as principais classes e suas responsabilidades.
4. **Funcionalidades**: Detalha o que o sistema pode fazer, como criar veículos, acelerar, realizar compras e consultar horários.
5. **Como Rodar o Projeto**: Passo a passo para rodar o projeto, incluindo como clonar, instalar dependências, compilar e executar o código.
6. **Exemplo de Uso**: Mostra um exemplo simples de como utilizar o sistema.
7. **Contribuição**: Orientações para quem deseja contribuir com o projeto.
8. **Licença**: A licença do projeto.

Com isso, seu projeto está bem documentado e pode ser facilmente entendido por outros desenvolvedores que precisem usá-lo ou contribuir.
