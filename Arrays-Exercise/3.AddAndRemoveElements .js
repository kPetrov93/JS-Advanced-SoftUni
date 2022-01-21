function action(command) {
    let arr = [];

    for (let i = 0; i < command.length; i++) {
        let current = command[i];

        if (current == 'add') {
            arr.push(i + 1);
        } else {
            arr.pop();
        }
    }
    if(arr.length > 0){
        console.log(arr.join('\n'));
    }else{
        console.log(`Empty`);
    }  
}
action(['add',
    'add',
    'remove',
    'add',
    'add']
)