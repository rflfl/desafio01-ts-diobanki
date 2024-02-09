export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.balance + value)
      console.log(`Depósito realizado com sucesso!`)
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.getBalance() > value) { 
      let newBalance = this.getBalance() - value
      this.setBalance(newBalance)
      console.log('Saque realizado com sucesso')
    } else {
      console.log('Saque indisponível')
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  private setBalance = (value:number): void => {
    this.balance = value;
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
