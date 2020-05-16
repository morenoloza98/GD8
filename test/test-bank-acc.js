const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAcc', () => {
    describe('#getCurrent', () => {
        let amount = 15678.98
        let account = new BankAccount(amount);
        it('Should return the current balance of the account', () => {
            assert.equal(amount, account.current());
        });        
    });

    describe('#append', () => {
        let balance = 15678.98
        let account = new BankAccount(balance);
        let amountToAdd = 1928.90
        it('Should add given amount to account balance', () => {
            assert.equal(17607.88, account.append(amountToAdd));
        });
        
    });

    describe('#appendNegative', () => {
        let balance = 15678.98
        let account = new BankAccount(balance);
        let amountToAdd = -1928.90
        it('Should not add given amount to account balance because it is negative', () => {
            assert.equal(15678.98, account.append(amountToAdd));
        });
    });

    describe('#substract', () => {
        let balance = 15678.98
        let account = new BankAccount(balance);
        let amountToSubs = 1928.90
        it('Should substract given amount to account balance', () => {
            assert.equal(13750.08, account.substract(amountToSubs));
        }); 
    });

    describe('#substractNegative', () => {
        let balance = 15678.98
        let account = new BankAccount(balance);
        let amountToSubs = -1928.90
        it('Should not substract given amount to account balance because it is negative', () => {
            assert.equal(15678.98, account.substract(amountToSubs));
        }); 
    });

    describe('#merge', () => {
        let balance = 15000.00
        let newBalance = 1500.00
        let account = new BankAccount(balance);
        let newAccount = new BankAccount(newBalance);
        it('Should merge both accounts and add the balance of new account', () => {
            assert.equal(16500.00, account.merge(newAccount).current());
        });
    });

    describe('#mergeSub', () => {
        let balance = 15000.00
        let newBalance = -1500.00
        let account = new BankAccount(balance);
        let newAccount = new BankAccount(newBalance);
        it('Should merge both accounts and substract the balance of new account', () => {
            assert.equal(13500.00, account.merge(newAccount).current());
        });
    });

    describe('#mergeHist', () => {
        let balance = 15000.00
        let newBalance = 1500.00
        let account = new BankAccount(balance);
        let newAccount = new BankAccount(newBalance);

        let hist1 = [{ 
            operation: 'append', 
            initialBalance: balance, 
            amount: 1920.00, 
            finalBalance: balance + 1920.00
        }];
        let hist2 = [
            { 
                operation: 'substract', 
                initialBalance: newBalance, 
                amount: 220.00, 
                finalBalance: newBalance + 220.00
            },
            { 
                operation: 'substract', 
                initialBalance: newBalance, 
                amount: 220.00, 
                finalBalance: newBalance + 220.00
            }
        ];
        account.hist = hist1;
        newAccount.hist = hist2;
        it('Should merge both accounts and their histories', () => {
            assert.deepEqual([
                { 
                    operation: 'append', 
                    initialBalance: 15000.00, 
                    amount: 1920.00, 
                    finalBalance: 15000.00 + 1920.00
                },
                { 
                    operation: 'substract', 
                    initialBalance: 1500.00, 
                    amount: 220.00, 
                    finalBalance: 1500.00 + 220.00
                },
                { 
                    operation: 'substract', 
                    initialBalance: newBalance, 
                    amount: 220.00, 
                    finalBalance: newBalance + 220.00
                }
            ], account.merge(newAccount).hist);
        });
    });

    describe('#history', () => {
        let balance = 15678.98
        let account = new BankAccount(balance);
        let hist = ({ 
            operation: 'append', 
            initialBalance: balance, 
            amountToAdd: 1920.00, 
            finalBalance: balance + 1920.00
        });
        account.hist = hist;
        it('Should return whole history of the account', () => {
            assert.equal(hist, account.history());
        });
        
    });
    
    
    
});