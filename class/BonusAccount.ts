import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number) => {
    if (this.validateStatus()) {
      this.balance += value + 10;
      console.log(
        `Voce depositou R$ ${value} e teve um bonus de R$10 então, seu saldo é R$ ${this.balance}`
      );
    }
  };
}
