var btn = document.getElementById('btn').style.cursor = "pointer"

function calculate (){
    var num = document.getElementById('num').value
    var calc = document.getElementById('calc')
    var i = 1
    
    if(calc.innerHTML = " "){
        while(i <= 10){
            calc.innerHTML += `<br> ${num} x ${i} = ${num * i}` 
            i++
        }
    }else{
        calc.innerHTML = " "
    }
}

