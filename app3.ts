// Importação das classes Carro, Moto e Concessionaria
import Carro from "./Carro"; // Importa a classe Carro
import Moto from "./moto"; // Importa a classe Moto
import Concessionaria from "./concessionaria"; // Importa a classe Concessionaria

// Instanciação de um objeto Carro com o modelo 'i30' e 4 portas
let carro = new Carro('i30', 4);

// Chama o método 'acelerar' duas vezes para aumentar a velocidade do carro
carro.acelerar(); // Aumenta a velocidade do carro em 10
carro.acelerar(); // Aumenta a velocidade do carro em 10 novamente

// Instanciação de um objeto Moto
let moto = new Moto();

// Chama o método 'acelerar' duas vezes para aumentar a velocidade da moto
moto.acelerar(); // Aumenta a velocidade da moto em 20
moto.acelerar(); // Aumenta a velocidade da moto em 20 novamente

// Instanciação de uma Concessionária com um nome vazio e uma lista de carros vazia
let concessionaria = new Concessionaria('', []);

// Exibe o estado final dos objetos criados
console.log(moto); // Exibe o objeto moto, mostrando suas propriedades e velocidade
console.log(carro); // Exibe o objeto carro, mostrando suas propriedades e velocidade
console.log(concessionaria.fornecerHorariosDeFuncionamento()); // Exibe o horário de funcionamento da concessionária

/*
Comentários:
Instanciação do Carro e Moto:

Os objetos carro e moto são instanciados a partir das respectivas classes Carro e Moto. Para o carro, é passado o modelo 'i30' e o número de portas 4, enquanto a moto é instanciada sem parâmetros.
Aceleração:

O método acelerar() do Carro e Moto é chamado duas vezes para aumentar a velocidade. No Carro, a velocidade é aumentada em 10 a cada chamada, enquanto na Moto a velocidade aumenta em 20 a cada vez que o método é chamado, conforme a lógica definida nas classes.
Instanciação de Concessionaria:

A Concessionaria é instanciada com um nome vazio e uma lista vazia de carros. Essa concessionária não tem carros nem um endereço específico neste ponto. O método fornecerHorariosDeFuncionamento() retorna uma string com os horários de funcionamento da concessionária, que é exibida no console.
Exibição dos objetos no console:

O comando console.log(moto) exibe o estado do objeto moto, incluindo suas propriedades (como modelo, velocidade e outros atributos).
O comando console.log(carro) exibe o estado do objeto carro, incluindo suas propriedades.
O comando console.log(concessionaria.fornecerHorariosDeFuncionamento()) exibe os horários de funcionamento da concessionária.
*/