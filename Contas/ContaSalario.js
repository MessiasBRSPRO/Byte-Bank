import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia);
    }

    saque(valor){
        const taxa = 1.01;
        return this._saque(taxa, valor);
    }
} 