function listToArray(list){
    let array = [];
    let temp = list;
    while(temp.rest != null){
        array.push(temp.value);
        temp = temp.rest;
    }
    array.push(temp.value);
    return array;
}

function arrayToList(array){
    const len = array.length;
    let list = {value: array[len - 1], rest: null};
    let temp = list;
    for(let i = len-2; i>=0; i--){
        list = {value: array[i], rest: temp};
        temp = list;
    }
    return list;
}
/*let list1 = listToArray([10, 20, 30]);
console.log(list1);
let array1 = arrayToList(list1);
console.log(array1);*/

//console.log(listToArray(arrayToList([10, 20, 30])));
//let list2 = {value: 30, rest: null}

function prepend(num, list){
    let newlist = {value: num, rest: list};
    return newlist;
}


/*let list1 = arrayToList([10, 20, 30, 40, 50, 60, 70]);
console.log(list1);*/

function nth(list, num){
    if(num == 0) return list.value;
    else return nth(list.rest, num - 1);
}

