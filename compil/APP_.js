"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const moto_1 = __importDefault(require("./moto"));
const concessionaria_1 = __importDefault(require("./concessionaria"));
let carro = new Carro_1.default('i30', 4);
carro.acelerar();
carro.acelerar();
let moto = new moto_1.default();
moto.acelerar();
moto.acelerar();
let concessionaria = new concessionaria_1.default('', []);
console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
