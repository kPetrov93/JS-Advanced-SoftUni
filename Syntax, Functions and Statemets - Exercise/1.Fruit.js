function solve(fruit,weight,price){

    let weightInKillos = (weight/1000).toFixed(2);
    let totalPrice = ((weight*price)/1000).toFixed(2);

    console.log(`I need $${totalPrice} to buy ${weightInKillos} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35)