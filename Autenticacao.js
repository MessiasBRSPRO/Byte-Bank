import { Funcionario } from "./funcionarios/Funcionario.js";

/*
Autenticavel seria todo aquele q tem a function "autenticar"
*/
export class Autenticacao extends Funcionario{
    static cadastro(autenticavel, senha){
        if(Autenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }
    static ehAutenticavel(autenticavel){
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function;
    }
}