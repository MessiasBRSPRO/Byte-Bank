import { Cliente } from "../Cliente.js";

export class Conta{
    constructor(saldo, cliente, agencia){

        if(this.constructor == Conta){
            throw new Error('Não é possível instanciar uma classe Abstrata!');
        }
        this._saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
    }
    set saldo(valor){
        this._saldo = valor;
    }

    get cliente(){
        return this._cliente;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    depositar(valorDoDeposito){
        if(valorDoDeposito <= 0){
            return;
        }
        this._saldo += valorDoDeposito;
    }

    saque(){
        throw new Error('Não é possível utilizar funções abstratas.');
    }
    _saque(taxa, valor){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0; 
    }

    transferir(valor, conta){
        const valorSacado = this.saque(valor);
        conta.depositar(valorSacado);
    }
}