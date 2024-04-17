import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

/* TENTAR SACAR MAIS DO QUE TEM */
// const peopleAccount: PeopleAccount = new PeopleAccount(4132, "Weslley", 1);
// console.log(peopleAccount.balance);
// peopleAccount.deposit(199);
// console.log(peopleAccount.balance);
// peopleAccount.withdraw(200);

/* TENTAR SACAR MAIS DO QUE TEM COM O STATUS FALSE */
// const peopleAccount: PeopleAccount = new PeopleAccount(4132, "Hash", 1);
// console.log(peopleAccount.balance);
// peopleAccount.deposit(200);
// console.log(peopleAccount.balance);
// peopleAccount.setStatus(false); // altere esse valor para passar na verificação de status
// peopleAccount.withdraw(200);
// console.log(peopleAccount.balance);

// PEGAR EMPRESTIMO
// const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
// companyAccount.deposit(200);
// console.log(companyAccount);
// companyAccount.getLoan(200);
// console.log(companyAccount);

// PEGAR EMPRESTIMO COM CONTA FALSE
// const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
// companyAccount.deposit(200);
// console.log(companyAccount);
// companyAccount.setStatus(true); // altere esse valor para passar na verificação de status
// companyAccount.getLoan(200);
// console.log(companyAccount);

// CONTA COM BONUS DE 10 REAIS NO DEPOSITO
const bonusAccount: BonusAccount = new BonusAccount("Weslley Bonus", 10);
console.log(bonusAccount);
bonusAccount.deposit(100);
console.log(bonusAccount);
