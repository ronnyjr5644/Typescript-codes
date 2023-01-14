class account{
    constructor(
        public accountno:number,
        private _balance:number,
        public accountname?:string
    ){}
    get balance():number{
        return this._balance
    }
    set balance(no:number){
        this._balance=no;
    }
    deposit(amt:number){
        this._balance+=amt;
        console.log('balance after deposit: ',this._balance);
    }
}
class savingaccount extends account{
constructor(public rateofinterest:number,accountno:number,_balance:number){
    super(accountno,_balance);
}
addinterest(){
    let interest=this.balance*this.rateofinterest/100;
    super.deposit(interest);

}
}
let savobj=new savingaccount(2.5,332342342,8000);
savobj.balance=9000;
savobj.addinterest();
