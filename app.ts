import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(4132, "Weslley", 1);
console.log(peopleAccount.balance);
peopleAccount.deposit(199);
console.log(peopleAccount.balance);
peopleAccount.withdraw(200); // dá erro pois, o valor de saque é maio que o de balance

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(200);
console.log(companyAccount);
companyAccount.getLoan(200);
console.log(companyAccount);

const bonusAccount: BonusAccount = new BonusAccount("Weslley Bonus", 10);
console.log(bonusAccount);
bonusAccount.deposit(15);
console.log(bonusAccount);
