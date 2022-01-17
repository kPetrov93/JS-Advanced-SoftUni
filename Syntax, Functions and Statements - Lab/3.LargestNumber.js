function largestNum(first,second,third){
    let largest;
    if (first > second && first > third){
        largest = first;
    }else if(second > first && second > third){
        largest = second;
    }else if(third > first && third > second){
        largest = third;
    }

    console.log(`The largest number is ${largest}.`)
}