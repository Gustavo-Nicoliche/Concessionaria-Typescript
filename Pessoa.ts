import Carro from "./Carro";
// Importa a classe `Carro` para ser utilizada como tipo e funcionalidade dentro da classe `Pessoa`.

export default class Pessoa {
    private nome: string; // Nome da pessoa
    private carroPreferido: string; // Modelo de carro preferido pela pessoa
    private carro: Carro | null = null; 
    // O carro que a pessoa possui (inicialmente `null`, indicando que ela ainda não comprou um carro).

    // Construtor para inicializar as propriedades nome e carroPreferido ao criar uma instância.
    constructor(nome: string, carroPreferido: string) {
        this.nome = nome; // Define o nome da pessoa
        this.carroPreferido = carroPreferido; // Define o modelo de carro preferido da pessoa
    }

    // Método público para obter o nome da pessoa.
    public dizerNome(): string {
        return this.nome; // Retorna o valor da propriedade `nome`
    }

    // Método público para obter o modelo de carro preferido da pessoa.
    public dizerCarroPreferido(): string {
        return this.carroPreferido; // Retorna o valor da propriedade `carroPreferido`
    }

    // Método público para atribuir um carro ao atributo `carro` (simulando uma compra).
    public comprarCarro(carro: Carro): void {
        this.carro = carro; // Atribui o carro comprado à propriedade `carro`
    }

    // Método público para obter o carro atual da pessoa.
    public dizerQueCarroTem(): Carro | null {
        return this.carro; 
        // Retorna o carro que a pessoa possui ou `null` caso ela não tenha um.
    }
}


/*
Importação de Carro:

A classe Pessoa interage diretamente com a classe Carro, então é necessário importar Carro para que o tipo seja reconhecido.
Propriedade carro:

Foi inicializada com null para indicar que a pessoa começa sem carro.
O tipo é Carro | null para permitir o estado inicial antes de a pessoa comprar um carro.
Construtor:

Inicializa as propriedades nome e carroPreferido ao criar uma instância de Pessoa.
Métodos:

dizerNome e dizerCarroPreferido: Retornam informações básicas sobre a pessoa.
comprarCarro: Simula a compra de um carro, atribuindo-o à propriedade carro.
dizerQueCarroTem: Retorna o carro que a pessoa possui ou null se ela não tiver um.
Uso de null:

Utilizar Carro | null é uma prática segura quando se sabe que a propriedade pode não ter um valor inicial. Isso garante maior clareza no código e evita erros ao acessar propriedades de um valor indefinido.
*/