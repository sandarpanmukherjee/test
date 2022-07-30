range = (start, end, step = start<end?1:-1) => {
    let arr = [];
    if(start < end){
        for(let i = start; i <= end; i += step) arr.push(i);
    }
    else{
        for(let j = start; j >= end; j += step) arr.push(j);
    }
    return arr;
}

function sum (array){
    let summ = 0;
    for(let item of array) summ += item;
    return summ;
}
console.log(range(10, 1));