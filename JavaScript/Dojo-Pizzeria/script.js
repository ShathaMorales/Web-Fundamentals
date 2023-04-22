function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var s1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(s1);

var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(s2);

var s3 = pizzaOven("marinara sauce", "onion", "arugula", "salami", "dried tomatoes", "feta");
console.log(s3);

var s4 = pizzaOven("deep dish", "olives", "prosciutto", "mozzarella", "capsicum");
console.log(s4);

