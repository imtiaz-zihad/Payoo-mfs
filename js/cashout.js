document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('Click');

    const cashOut = document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    if (pinNumber === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
  
        const addMoneyNumber = parseFloat(cashOut);
        const balancenumber = parseFloat(balance);
        const newBalance = balancenumber - addMoneyNumber;
      console.log(newBalance);

      document.getElementById('account-balance').innerText = newBalance;
        
    }
})