
let result  = document.getElementById("result");

function input(num){
    let number = result.value;
    result.value = number + num;
}

// botão calcular
function calc(){
    if(result.value != ""){
        let result2  = result.value;
        result.value = eval(result2)
    } else{
        alert("Erro! Adicione valores válidos.")
    }
}

// botão reset
function reset(){
    result.value = "";
}

// botão delete
function del(){
    let result2  = result.value;
    result.value = result2.substring(0, result2.length - 1);
}
