function calc() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let firstNum = Number(num1);
    let secondNum = Number(num2);
    let result = firstNum + secondNum;

    document.getElementById('sum').value = result;

}
