function cooking(num, c1, c2, c3, c4, c5) {
    let number = Number(num);
    let commands = [c1, c2, c3, c4, c5];

    for (let i = 0; i < 5; i++) {
        if (commands[i] == 'chop') {
            number /= 2;
            console.log(number);
        } else if (commands[i] == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (commands[i] == 'spice') {
            number++;
            console.log(number);
        } else if (commands[i] == 'bake') {
            number *= 3;
            console.log(number);
        } else if (commands[i] == 'fillet') {
            number *= 0.80;
            console.log(number);
        }
    }
}