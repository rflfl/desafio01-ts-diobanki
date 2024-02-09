import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {
    if(this.validateStatus()){
      console.log('Empréstimo realizado com sucesso!')
      this.setBalance(value)
    } else {
      console.log('Não foi possível realizar a solicitação de empréstimo')
    }
  }
}
