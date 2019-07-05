
    //collect varaibles(inputs) from the form
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');
    var currId = from + "_" + to;


    fetch(`https://free.currconv.com/api/v6/convert?q=${currId}&compact=ultra&apiKey=4e89e9e6ebef7956885e`)
        .then(res => res.json())
        .then(data => {

                /* select the first value as rate*/

                var rate = Object.values(data)[0];
                /*convert the amount with the rate*/
                var convertedAmount = amount * rate;
                /*display the result to the DOM*/
                result.innerHTML = convertedAmount.toFixed(2);
            }

        );
}
