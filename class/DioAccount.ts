export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setStatus = (value: boolean): void => {
    this.status = value;
  };

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Voce depositou R$ ${value}`);
    }
  };

  withdraw = (value: number): void => {
    if (this.validadeWithdraw(value)) {
      this.balance -= value;
      console.log(`Voce sacou R$ ${value}`);
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  validateStatus = (): boolean => {
    if (this.status) return this.status;

    throw new Error("Conta inválida");
  };

  validateBalanceWithdraw = (value: number): boolean => {
    if (this.balance >= value) {
      return true;
    } else {
      throw new Error("Saldo insuficiente");
      return false;
    }
  };

  private validadeWithdraw = (value: number): boolean => {
    if (this.validateBalanceWithdraw(value) && this.validateStatus()) {
      return true;
    } else {
      return false;
    }
  };
}
