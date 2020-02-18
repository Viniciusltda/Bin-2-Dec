let num = document.getElementById("numi");
let result = document.getElementById("results");

function converter(){
    result.innerHTML = null;
    if(num.value.length == 0 || !validation()){
        alert('Not a binary code or no data was submited! Please check and try again!');

    }
    else{
        let pot = 2;
        let pot2 = 0;
        let sum = 0;
        let sum2 = 0;
        let dec = 0;
        for(c = (num.value.length - 1); c >= 0; c--){
            sum = pot ** pot2;
            sum2 = sum * num.value[c];
            dec += sum2;
            pot2++;

        }

        result.innerHTML += `<p>The Decimal Number for '${num.value}' is '${dec}'!</p>`;

    }
    

}

function validation(){
    let val = 0;
    for(pos = 0; pos <= num.value.length; pos++){
        let comp = num.value[pos];

        if(comp == 0 || comp == 1){
            val++

        }
        else{
            val = -1;

        }

        if(val == num.value.length){
            return true;

        }
        else if(val == -1){
            return false;
        }
    }

}