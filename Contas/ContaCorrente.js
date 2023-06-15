import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia);
    }

    saque(valorSacado){ //taxa de 10%
        const taxa = 1.1;
        return this._saque(taxa, valorSacado);
    }
}