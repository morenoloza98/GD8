class BankAccount{
    hist = [];
    constructor(balance) {
        this.balance = balance;
    }

    current(){
        return this.balance;
    }

    append(amountToAdd){
        if(amountToAdd < 0){
            return this.balance;
        } else {
            this.hist.push({ 
                operation: 'append', 
                initialBalance: this.balance, 
                amount: amountToAdd, 
                finalBalance: this.balance + amountToAdd
            });
            return this.balance + amountToAdd;
        }
    }

    substract(amountToSubstract){
        if(amountToSubstract < 0){
            return this.balance;
        } else {
            this.hist.push({ 
                operation: 'substract', 
                initialBalance: this.balance, 
                amount: amountToSubstract, 
                finalBalance: this.balance - amountToSubstract
            });
            return this.balance - amountToSubstract;
        }
    }

    merge(account){
        for (let index = 0; index < account.hist.length; index++) {
            this.hist.push(account.hist[index]);
        }
        if(account.balance < 0){
            this.balance -= account.balance*-1;
        } else {
            this.balance += account.balance;
        }
        return this;
    }

    history(){
        return this.hist;
    }

}

module.exports = BankAccount;