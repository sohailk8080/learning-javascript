//1. find unique elements in an array
const a = [1,2,1,5,3,4,3,7,6];
const uniqueElem = [...new Set(a)];
console.log(uniqueElem);

//2. int to String
let b = 23;
//let tostring = b + ' ';
let tostring = String(b);
console.log(tostring);
console.log(tostring+10);

//3. float to int
let c = 10.11;
let newInt = parseInt(c)
console.log(newInt);

//4. check if a variable is a Number
let d = 100;
if(typeof d === 'number' && !isNaN(d)){
    console.log('Is a number');
}
else{
    console.log('Not a no');
}

//5. swap variable values
let e = 10;
let f = 15;
[e,f] = [f,e];
console.log(e,f); 

//6. check if an object has a property(hasOwnProperty)
const g = {
    name : 'Sohail',
    gender: 'Male'
}
if(g.hasOwnProperty('gender')){
    console.log(`Yes, it has a property of gender ${g.gender}`);
}

//7. remove falsy values from the array(false, 0, "", null, undefined, NaN)==>(filter(Boolean))
const h = [0,1,false, "",'', 2,3, null, undefined, NaN, 4,5];
console.log(h.filter(Boolean));

//8. String to UPPERCASE/lowercase
const i = 'Sohail Khan';
console.log(i.toUpperCase());
console.log(i.toLowerCase());

//9. check if array contains a value(includes)
const j = ["java", "javascript", "python", "c#"];
if(j.includes("javascript")){
    console.log("found");
}

//10. check if an array is empty
const k = [];
if(k.length===0){
    console.log(true);
}
else{
    console.log("Array is not empty");
}

//11. generate a random no(Math.floor(Math.random))
const l = 20;
const m = 10;
const lm = Math.floor(Math.random()*(l-m+1))+l;
console.log(lm);

//12. String to number
let n = '100.5';
let toInteger = parseInt(n);
let toFloat = parseFloat(n);
console.log(toInteger);
console.log(toFloat);

//13. join array elements into a string(join)
let o = ['Hello', 'JS'];
const joinO = o.join(' '); //added space here, this is be anything
console.log(joinO);

//14. get object property
const p = {
    name : 'Sohail',
    gender: 'Male'
}
console.log(p['name']);

//15. clone an array or object(...obj)
const q = [10,20,30,40,50];
//for array
const copyQ = [...q]; //spread operator
console.log(copyQ);
//for object(using 14)
const r = {...p}
console.log(r);

//16. convert object to an array
//using 14
//for key array
const objKeys = Object.keys(p);
console.log(objKeys);
//for values array
const objVal = Object.values(p);
console.log(objVal);
//for entries array
const entries = Object.entries(p);
console.log(entries);

//17. get current date and time(Date object, toLocaleString)
const date = new Date;
console.log(date.toLocaleString());

//18. check variable is defined
let s;
if(typeof s === 'undefined'){
    console.log(s);
}

//19. truncate an array
let t = [0,1,2,3,4,5];
t.length=2;
console.log(t);

//20. Last item in an array
let u = [0,1,2,3,4,5];
console.log(u.splice(-1));