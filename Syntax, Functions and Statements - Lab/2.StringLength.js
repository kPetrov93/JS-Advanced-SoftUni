function solve(firstNum,secondNum,thirdNum){

    let firstLenght = firstNum.length;
    let secondLenght = secondNum.length;
    let thirdLenght = thirdNum.length;

    let sum = firstLenght + secondLenght + thirdLenght;
    let average = Math.floor(sum/3);

    console.log(sum);
    console.log(average);
}

solve('chocolate', 'ice cream', 'cake');