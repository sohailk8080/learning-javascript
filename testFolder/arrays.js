//push
let pushVal = ["apple", "mango", "banana", "grapes"];
pushVal.push("kiwi");
console.log(pushVal);

//pop
let popVal = ["apple", "mango", "banana", "grapes"];
popVal.pop;
console.log(popVal);

//shift
let shiftVal = ["apple", "mango", "banana", "grapes"];
let aftershift = shiftVal.shift();
console.log(shiftVal);
//console.log(aftershift);

//unshift
let unshiftVal = ["apple", "mango", "banana", "grapes"];
unshiftVal.unshift("pineapple");
console.log(unshiftVal);

//splice
let spliceVal = ["apple", "mango", "banana", "grapes"];
//spliceVal.splice(2,1);
spliceVal.splice(2,1, "strawberry");
console.log(spliceVal);

//slice
let sliceVal = ["apple", "mango", "banana", "grapes"];
let newSliceVal = sliceVal.slice(1,3);
console.log(newSliceVal);

//concat
let a1 = ["apple", "avocado"];
let a2 = ["Banana", "Blueberry"];
let a3 = a1.concat(a2);
console.log(a3);

//indexOf 
let indexOfVal = ["avocado", "Blueberry", "apple", "mango", "banana", "apple","grapes", "apple"];
//let ind = indexOfVal.indexOf("apple"); //this returns only first presence
let ind = indexOfVal.indexOf("apple", indexOfVal.indexOf("apple")+1); //this returns next presence
console.log(ind);

//includes
let includesVal = ["apple", "mango", "banana", "grapes"]; 
//let inc = includesVal.includes("mango");
let inc = includesVal.includes("mango", 2);
console.log(inc);

//forEach
let feVal = ["apple", "mango", "banana", "grapes"];
feVal.forEach((f) => console.log(f));





 





