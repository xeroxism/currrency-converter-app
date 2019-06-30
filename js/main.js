function convertCurrency() {
    //collect varaibles(inputs) from the form
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');
    var currId = from + "_" + to;


    //request rate from the API and do the currency conversion
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            //assign the object returned to a variable
            var myObj = JSON.parse(this.responseText);

            //select the rate value from the JSON object
            firstValue = Object.values(myObj);
           let rate = firstValue[0];
            //convert to the amount entered
           let convertedAmount = rate * amount;
                //output the convertedAmount to the DOM
            result.innerHTML = convertedAmount.toFixed(2);
        }
    };
    xmlhttp.open("GET", `https://free.currconv.com/api/v7/convert?q=${currId}&compact=ultra&apiKey=4e89e9e6ebef7956885e`, true);
    xmlhttp.send();

}

