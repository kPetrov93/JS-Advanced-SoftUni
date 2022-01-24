function magic(arr) {
    let sum = arr[0].reduce((a, b) => a + b);

    for (let i = 0; i < arr[0].length; i++) {

        let currentSum = 0;

        for (let j = 0; j < arr.length; j++) {
            currentSum += arr[j][i];
        }
        if (currentSum !== sum) {
            return false;
        } 
    }
    return true;
}

magic([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)