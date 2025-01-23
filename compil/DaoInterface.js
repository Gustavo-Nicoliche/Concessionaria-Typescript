"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Comentários sobre o código:
Interface Genérica (<T>):

A interface é definida com um tipo genérico T. Isso permite que ela seja reutilizada para qualquer tipo específico no momento da implementação (ex.: DaoInterface<Carro>, DaoInterface<Pessoa>).
Facilita o uso de tipos dinâmicos sem precisar criar interfaces ou classes específicas para cada tipo.
Propriedade nomeTabela:

Representa o nome da tabela no banco de dados à qual a implementação da interface estará vinculada.
Método inserir:

Recebe um objeto do tipo T e retorna um valor booleano indicando sucesso ou falha da operação.
Método atualizar:

Semelhante ao inserir, mas para atualizar um objeto existente no banco.
Método remover:

Recebe um identificador (id) e retorna o objeto do tipo T que foi removido.
Método selecionar:

Localiza um objeto no banco de dados com base no identificador (id) e retorna o objeto correspondente.
Método selecionarTodos:

Retorna um array contendo todos os objetos do tipo T presentes na tabela.
Pontos de Destaque:
Reutilização Genérica: Como a interface usa o tipo genérico <T>, ela é altamente flexível e aplicável a qualquer tipo de dado.
Estrutura Padrão: Oferece um modelo consistente para operações comuns de CRUD (Create, Read, Update, Delete).
Boa Prática: Seguir um contrato com métodos bem definidos melhora a manutenção e entendimento do código.
*/ 
