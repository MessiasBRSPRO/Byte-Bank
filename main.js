import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { Autenticacao } from "./Autenticacao.js";

const cliente = new Cliente('Fábio', 55533300234, '466')

const diretor = new Diretor('Joabe', 10000, 99988855503);
diretor.cadastrarSenha('12566');

const gerente = new Gerente('Iara', 5000, 65523347702);
gerente.cadastrarSenha('2333');

const loginDiretor = Autenticacao.cadastro(diretor, '12566');
const loginGerente = Autenticacao.cadastro(gerente, '2333');
const loginCliente = Autenticacao.cadastro(cliente, '466');

console.log(loginCliente);