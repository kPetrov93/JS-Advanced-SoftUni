function print(arr, delimiter) {
    let newArr = arr.slice().join(delimiter);

    console.log(newArr);
}

print(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
)