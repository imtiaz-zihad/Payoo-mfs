document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Money Added BTN clicked");

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);

    if (pinNumberInput === "1234") {
      console.log("add money to your account");
      const balance = document.getElementById('account-balance').innerText;
      console.log(balance);

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balancenumber = parseFloat(balance);



      const newBalance = balancenumber + addMoneyNumber;
      console.log(newBalance);

      document.getElementById('account-balance').innerText = newBalance;
      
      
    } else {
      alert("Please Try again");
    }
  });
