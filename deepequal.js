let objone = 3;
let objtwo = 3;

function deepEqual(obj1, obj2){
if(typeof obj1 == "object" && obj1 != null && typeof obj2 == "object" && obj2 != null){
        const keys1 = Object.keys(obj1), keys2 = Object.keys(obj2);
        if(keys1.length != keys2.length) return false;
        for(item of keys1){
        if(!obj2.hasOwnProperty(item)) return false;
        if(!deepEqual(obj1[item], obj2[item])) return false;
        }
        return true;
    }
else return obj1 === obj2;
}

deepEqual(objone, objtwo);
