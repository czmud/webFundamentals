/* design a for loop that cycles through numbers 1 to 100 and:
    -prints fizz for multiples of 3
    -prints buzz for multiples of 5
    -logs fizzbuzz for multiples of 3 & 5
    -logs the number for all other numbers */

for(let i = 1; i<=100; i++){
    if(i%15 === 0){
        console.log("FizzBuzz");
    }else if(i%3 === 0){
        console.log("Fizz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}