// deposit handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const deposiTotaltInput = parseFloat(depositInputText);
    console.log(deposiTotaltInput);

    // current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositText);
    
    // depositTotal.innerText = previousDepositTotal + deposiTotaltInput;
    //  depositInput.value = '';
    const depositTotal = document.getElementById('deposit-total');
    const depositText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositText);
    const newDepositAmount = previousDepositTotal + deposiTotaltInput;
    depositTotal.innerText = newDepositAmount;
    depositInput.value = '';
    // set balance
    
     const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceText);
    const newBalanceTotal = previousBalanceTotal + deposiTotaltInput;
    balanceTotal.innerText = newBalanceTotal;

});

// withdraw handler

    document.getElementById('withdraw-button').addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawInputText = withdrawInput.value;
        const previousWithdrawInputText = parseFloat(withdrawInputText);
        console.log(previousWithdrawInputText);   

        withdrawInput.value = '';
        
        const withdrawTotal = document.getElementById('withdraw-total');
        const withdrawTotalText = withdrawTotal.innerText;
        const withdrawTotalTextAmount = parseFloat(withdrawTotalText);
        const newWithdrawAmount = withdrawTotalTextAmount + previousWithdrawInputText;
        withdrawTotal.innerText = newWithdrawAmount;
        
                
        // set balance
            const totalBalance = document.getElementById('balance-total');
            const balanceTotalText = totalBalance.innerText;
            const previousBalanceTotalText = parseFloat(balanceTotalText);
            const newTotalBalance = previousBalanceTotalText - previousWithdrawInputText;
            totalBalance.innerText = newTotalBalance;


    })
    