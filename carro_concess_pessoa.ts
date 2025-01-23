import Carro from './Carro' // Importa a classe Carro
import Pessoa from './Pessoa' // Importa a classe Pessoa
import Concessionaria from './concessionaria' // Importa a classe Concessionaria

// ----- CRIAR CARROS ------
let carroA = new Carro('Dodge Journey', 4) // Criação de um carro com modelo 'Dodge Journey' e 4 portas
let carroB = new Carro('i30', 4) // Criação de um carro com modelo 'i30' e 4 portas
let carroC = new Carro('Kia Cerato', 4) // Criação de um carro com modelo 'Kia Cerato' e 4 portas

// Lista de carros disponíveis na concessionária
let listaDeCarros: Carro[] = [carroA, carroB, carroC] // Array com os carros criados acima

// Instanciação de uma concessionária com a lista de carros
let concessionaria = new Concessionaria('Av Paulista', listaDeCarros) 
// Cria uma nova concessionária localizada na 'Av Paulista', que possui a lista de carros criada acima

// ----- COMPRAR CARRO ------
let cliente = new Pessoa('Gustavo', 'i30') 
// Criação de um cliente com nome 'Gustavo' e carro preferido 'i30'

// Percorre a lista de carros da concessionária para encontrar o carro preferido do cliente
concessionaria.mostrarlistaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) { 
        // Verifica se o modelo do carro atual corresponde ao carro preferido do cliente
        cliente.comprarCarro(carro) // Atribui o carro ao cliente, simulando a compra
    }
})

console.log(cliente.dizerQueCarroTem()) 
// Exibe no console o carro que o cliente possui após a compra
