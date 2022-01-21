function rotate(arr,num){

    for(let i =0;i<num;i++){
        let current = arr.pop();
        arr.unshift(current);
    }

    console.log(arr.join(' '));
}