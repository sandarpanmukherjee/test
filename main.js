let array1 = ["str1", "str2"];
let array2 = [];
function arrayDouble(arr) {
  arr.forEach(function (str) {
    array2.push(str);
    array2.push(str);
  });

  return array2;
}
let new_Arr = arrayDouble(array1);
console.log(new_Arr);
console.log(window);