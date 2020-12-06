    let input = document.getElementById("numbers");
let submit = document.getElementById("submit");
var result = document.getElementById("result");

submit.addEventListener('click', function(){
   var value = numbers.value;
   value = parseInt(value);
   print(value);
})
function print(n){
for(let i = 0; i<=n; i++){
    if(i%15===0){
        result.innerHTML="FizzBuzz";
    }
    else if(i%3===0){
        result.innerHTML="Fizz";
    }
    else if(i%5===0){
        result.innerHTML="Buzz";
    }
    else{
        result.innerHTML=i;
    }
}
}
