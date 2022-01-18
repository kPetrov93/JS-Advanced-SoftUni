function check(input) {
    let inputNumber = input.toString();
    let sum = 0;
    let isSame = true;
    let num = inputNumber[0];
    for (let i = 0; i < inputNumber.length; i++) {
        sum += Number(inputNumber[i])
        if (inputNumber[i] != num) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}
check(1234)