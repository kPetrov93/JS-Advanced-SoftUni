function print() {
    let data = {};

    Array.from(arguments).forEach((ele) => {
        let type = typeof ele;
        console.log(`${type}: ${ele}`);
        if (!data[type]) {
            data[type] = 0;
        }

        data[type]++;
    })

    let sorted = [];
    for (let element in data) {
        sorted.push([element, data[element]]);
    }

    sorted.sort((a, b) => b[1] - a[1]);
    sorted.forEach(x =>
        console.log(`${x[0]} = ${x[1]}`)
    )
}

print({ name: 'bob' }, 3.333, 9.999)