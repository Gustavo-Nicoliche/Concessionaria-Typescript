"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Comentários sobre o código:
Definição da Interface:

A palavra-chave interface é usada para criar um contrato que as classes devem seguir.
Neste caso, concessionariaInterface define que qualquer classe que a implemente deve obrigatoriamente ter um método fornecerHorariosDeFuncionamento.
Método fornecerHorariosDeFuncionamento:

O método é definido sem implementação (corpo).
Ele retorna um tipo string, o que significa que qualquer classe que o implemente deve garantir essa assinatura exata.
Modularidade e Reutilização:

Interfaces são úteis para padronizar o comportamento de diferentes classes que compartilham funcionalidades similares.
Ao usar export default, torna-se mais fácil importar e aplicar a interface em outras partes do projeto.
Benefícios:

Contratos de código: Garantem que todas as classes que implementam a interface possuam os métodos necessários.
Facilidade de manutenção: Qualquer mudança na interface reflete em todas as classes que a implementam, ajudando na consistência.
Flexibilidade: Permite que múltiplas classes implementem a interface de formas diferentes, desde que respeitem a assinatura definida.
Exemplo de uso:
A interface está sendo implementada na classe Concessionaria. Isso força a classe a incluir o método fornecerHorariosDeFuncionamento para cumprir o contrato.
*/ 
