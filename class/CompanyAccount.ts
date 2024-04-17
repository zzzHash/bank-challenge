import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value; // o emprestimo ja esta sendo acrescido ao saldo
      console.log(`Voce pegou um empréstimo de R$ ${value}`);
    }
  };
}
