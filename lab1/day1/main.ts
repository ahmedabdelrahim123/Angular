class Account {
    Acc_no:number = 0;
   private Balance:number = 0;
     constructor(AccountNumber:number, Balance:number){
        this.Acc_no = AccountNumber;
        this.Balance = Balance;
    }
    debit_amount() {
        return "debit_amount";
    }
    credit_amount(){
        return "credit_amount";
    }
    get_balance(){
        return this.Balance;
    }

}
abstract class Acccount{
 DateOfOpening: Date = new Date();  
 abstract add_customer();
 abstract remove_customer();
}
class SavingAccount implements Acccount extends Account {
    add_customer(){}
    remove_customer(){}
   
}