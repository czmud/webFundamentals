// JavaScript solutions for array challenges


//1. Always Hungry
// function to print "yummy" if food, else if no food print "I'm hungry"
function alwaysHungry(arr){
    let gotNoFood = true;
    for ( let i = 0; i<arr.length; i++){
        if( arr[i] === "food"){
            console.log("yummy");
            gotNoFood = false;
        }
    }
    if(gotNoFood){
        console.log("I'm Hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]); // this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]); // this should console log "I'm hungry"


//2. High Pass Filter
// function that returns a new array with only values greater than a cutoff value
function highPass(arr, cutoff){
    let filteredArr = [];

    for( let i = 0; i < arr.length; i++ ){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;

}

console.log(highPass([6, 8, 3, 10, -2, 5, 9], 5)); // we expect back [6, 8, 10, 9]


//3. Better than average
// function to count how many values in an array are greater than average

function betterThanAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }
    let average = sum/arr.length;
    let count = 0;

    for( let i = 0; i < arr.length; i++ ){
        if(arr[i] > average){
            count++;
        }
    }

    return count;
}

console.log(betterThanAverage([6, 8, 3, 10, -2, 5, 9])); // we expect back 4


//4. Array Reverse
// function to return the reverse of the position of values in an array
function reverse(arr) {
    let i = 0;
    let j = arr.length - 1;
    let temp = "";

    while(i<j){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }


    return arr;
}

console.log(reverse(["a", "b", "c", "d", "e"])); // we expect back ["e", "d", "c", "b", "a"]


//5. Fibonacci Array
// function to return an array of fibonacci numbers up to a given length 'n'
function fibonacciArray(n){
    let fibArr = [0,1]
    for(i = 2; i < n; i++){
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}

console.log(fibonacciArray(10)); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
