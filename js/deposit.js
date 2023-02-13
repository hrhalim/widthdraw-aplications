document.getElementById('btn-deposit').addEventListener('click', function(){
  
    //step 1
    let userDeposit = document.getElementById('user-deposit');  
    let newtDepositstr = userDeposit.value;
    let newtDeposit = parseFloat(newtDepositstr);

    let depositAmount = document.getElementById('deposit-amount');   
    let previousAmountStr = depositAmount.innerText;  
    let previousAmount = parseFloat(previousAmountStr);
    let currentAmount = previousAmount + newtDeposit; 

     depositAmount.innerText = currentAmount;

     let totalBlanceElement = document.getElementById('total-blance');
     let previousBlanceStr = totalBlanceElement.innerText; 
     let totalBlaceAmount = parseFloat(previousBlanceStr);
     let remaingTotalBlace = totalBlaceAmount + newtDeposit;
     totalBlanceElement.innerText = remaingTotalBlace; 
    
     userDeposit.value = ''; 

    

});