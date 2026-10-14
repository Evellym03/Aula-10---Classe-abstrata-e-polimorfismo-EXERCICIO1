import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interfaces/ContaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {
    constructor(props: ContaCorrenteProps) {
        super(props);
    }

    public getLimite(): number {
        return this.props.limite;
    }

    // Polimorfismo no método sacar (Leva em consideração o limite)
    public override sacar(valor: number): void {
        if (valor <= 0) {
            console.log("\n ERRO: O valor do saque deve ser maior que zero!");
            return;
        }
       
        const saldoDisponivel = this.getSaldo() + this.props.limite;
       
        if (saldoDisponivel >= valor) {
            this.props.saldo -= valor;
        } else {
            console.log("\n ERRO: Saldo e limite insuficientes!");
        }
    }

    // Implementação obrigatória (Polimorfismo)
    public exibirExtrato(): void {
        console.log(`[CONTA CORRENTE] Titular: ${this.props.titular} | Ag: ${this.getAgencia()} | CC: ${this.getNumero()} | Saldo: R$${this.getSaldo().toFixed(2)} | Limite: R$${this.getLimite().toFixed(2)}`);
    }
}

