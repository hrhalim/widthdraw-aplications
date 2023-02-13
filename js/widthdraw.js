document.getElementById('btn-widthdraw').addEventListener('click', function(){
    let widthdrawField = document.getElementById('user-field');
    let widthdrawFieldStr = widthdrawField.value;
    let newWidtdrawBlance = parseFloat(widthdrawFieldStr);  
  
    let widthdrawElement = document.getElementById('widthdraw-amount');
    let widthdrawElementStr = widthdrawElement.innerText;
    let previousWidtdrawBlace = parseFloat(widthdrawElementStr);

    let totalWidtdrawBlance = previousWidtdrawBlace + newWidtdrawBlance;
    widthdrawElement.innerText = totalWidtdrawBlance; 

    let TotalBlaceAmount = document.getElementById('total-blance');
    let totalBlaceStr = TotalBlaceAmount.innerText; 
    let totalremainingBlance = parseFloat(totalBlaceStr); 

    let finalBlaceremaining = totalremainingBlance - totalWidtdrawBlance;
    TotalBlaceAmount.innerText = finalBlaceremaining; 
  
    widthdrawField.value = ""; 

});