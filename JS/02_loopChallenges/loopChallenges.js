/* five different loop challenges wrapped into 1 assignment */

/* 1. Print odds 1-20
write a loop that will log all the odd numbers from 1-20 */
for(let i=1; i<=20; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

/* 2. Decreasing multiples of 3 
write a loop that will log all of the values divisible by 3 from 100-0 */
for(let i=100; i>=0; i--){
    if(i%3 === 0){
        console.log(i);
    }
}

/* 3. Print the sequence
write a loop that prints the values in a given sequence */
let array = [4, 2.5, 1, -0.5, -2, -3.5];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}


/* 4. Sigma
write a loop that calculates the summation of 1-100 */
let sum = 0;
for(let i=1;i<=100;i++){
    sum += i;
}
console.log(sum);



/* 5. Factorial
write a loop that calculates the product of 12! */
let product = 1;
for (let i=1; i<=12; i++){
    product *= i;
}
console.log(product)