function solve(input) {
    const towns = [];

    for (const town of input) {
        let [name, population] = town.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }
        towns[name] = population;

    }
    for (const elem in towns) {
        console.log(`${elem} : ${towns[elem]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)