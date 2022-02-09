// bank,createAcoount()
// withdrow(),balanceEnquiry()

class Bank{
 createAccount(acno,pName,pan,branch,phone,bal){
this.accountNumber=acno;
this.personName=pName;
this.pan=pan;
this.branch=branch;
this.phone=phone;
this.bal=bal;
 }

 withdrow(amount){
if(amount>this.bal){
    console.log(`transaction cancelled insufficient balance on our${this.accountNumber}`);
}
else{
    this.bal=amount
    console.log(`your account ${this.accountNumber} has been debited with amount${amount} you avalaiblr bal ${this.bal}`);
}
 }
 deposite(amount){
     this.bal+=amount;
     console.log(`your account ${this.accountNumber} has been credited with amount${amount} you avalaiblr bal ${this.bal}` );

 }
 balanceEnquiry(){
     console.log(`your aval bal=${this.bal}`);
 }}

 var bank=new Bank
 bank.createAccount(1010,"arjun",1234,"kakkanad",700386985,50000)
 bank.withdrow(5000)
 bank.balanceEnquiry()