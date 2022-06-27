//javascript function to generate pizzas for Dojo Pizzeria

const toppingDict = {
    crustOp: ['deep dish', 'hand-tossed'], 
    sauceOp: ['marinara', 'pesto', 'traditional', 'white'],
    cheeseOp: ['mozzarella', 'feta', 'parmesan'],
    toppingOp: ['mushrooms','olives', 'onions', 'garlic', 'tomatoes', 'peppers', 'spinach', 'basil','pineapple','sausage', 'pepperoni'],
};


let pizza1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage'] );
let pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
let pizza3 = pizzaOven('deep dish', 'white', ['parmesan'], ['peppers', 'tomatoes', 'spinach']);
let pizza4 = pizzaOven('hand tossed', 'pesto', ['mozzarella', 'feta'], ['basil', 'garlic', 'sausage', 'olives']);
let pizza5 = randomPizza();




//takes list of pizza toppings and generates pizza object
function pizzaOven(crustFx, sauceFx, cheeseFx, toppingsFx){
    let pizzaFx = {};
    pizzaFx.crustType = crustFx;
    pizzaFx.sauceType = sauceFx;
    pizzaFx.cheeses = cheeseFx;
    pizzaFx.toppings = toppingsFx;

    return pizzaFx;
}


//function to generate pizzas randomly
function randomPizza(){
    let pizzaFx = {};
    let crustFx = "",
        sauceFx = "",
        cheeseFx = [],
        toppingFx = [];
    let randomChoice = 0;//number to randomly select item in pizza dictionary
    let randomToppingCount = 0;//number to determine how many items chosen for catagories where multiples are allowed


    randomChoice = Math.floor(Math.random()*toppingDict.crustOp.length);
    crustFx = toppingDict.crustOp[randomChoice];
    
    randomChoice = Math.floor(Math.random()*toppingDict.sauceOp.length);
    sauceFx = toppingDict.sauceOp[randomChoice];

    randomToppingCount = Math.ceil(Math.random()*3);
    for(let i = 0; i<randomToppingCount; i++){
        randomChoice = Math.floor(Math.random()*toppingDict.cheeseOp.length);
        cheeseFx.push(toppingDict.cheeseOp[randomChoice]);
    }

    randomToppingCount = Math.ceil(Math.random()*5);
    for(let i = 0; i<randomToppingCount; i++){
        randomChoice = Math.floor(Math.random()*toppingDict.toppingOp.length);
        toppingFx.push(toppingDict.toppingOp[randomChoice]);
    }

    //call pizza oven function and input randomly generated toppings
    pizzaFx = pizzaOven(crustFx, sauceFx, cheeseFx, toppingFx)
    return pizzaFx;
}