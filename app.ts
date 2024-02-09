import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
console.log(peopleAccount.getBalance())
peopleAccount.deposit(50)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(70)
console.log(peopleAccount.getBalance())
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
console.log(companyAccount.getBalance())
companyAccount.withdraw(5)
console.log(companyAccount.getBalance())
companyAccount.withdraw(30)
console.log(companyAccount.getBalance())