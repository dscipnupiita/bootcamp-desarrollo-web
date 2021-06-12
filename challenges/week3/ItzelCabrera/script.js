const btn = document.getElementById("btn");
const result = document.getElementById("result")

let number = 0;

function play(number){
    if((number%3===0) && (number%5===0))return "FizzBuzz";
    if (number%3 === 0)return "Fizz";
    if(number %5 === 0)return "Buzz";
    else return number;
}

function count(){
    number++;
    result.innerHTML = play(number);
}

btn.addEventListener("click",function(){
    count();
});