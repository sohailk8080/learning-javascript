//Function Declaration
function add(a,b){
    return a+b;
}
function print(){
    console.log("This is JS");
}
console.log(add(3,5));
print();

//Function Expression
let mul = function(a,b){
    return a*b;
}
console.log(mul(5,5));

//Arrow Function
let div = (t1,t2) => (t1/t2)
console.log(div(10,2));

//Anonymous Function(No function name)
const c = [10,20,30,40];
const cMap = c.map(function(e){
    return e * e;
});
console.log(cMap);

        //or
const d = [1,2,3,4];
const dmap = d.map((e) => {
     return e*e;
    });
console.log(dmap);

//Immediately Invoked Function Expression (IIFE)
(function(a,b){
    a=1; b=2;
    console.log(a+b);
})();

//Generator Function (Using function*)
//Using yield inside a generator function
function* genFunc(){
    yield 1;
    yield 2;
    yield 3;
}
let gen = genFunc();
console.log("gen1 value::"+gen.next().value);
console.log("gen2 value::"+gen.next().value);

//Constructor Function('F'unction)
let sub = new Function('c', 'd', 'return d-c;')
console.log(sub(30,50));

//Recursive function
function factorial(n){
    if(n===0 || n ===1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log("Factorial is "+factorial(5));

//Higher-order function
function sum(a,b){
    return a+b;
}
function subtr(a,b){
    return a-b;
}
function operate(funcName, a, b){
    return funcName(a,b);
}
console.log(operate(sum, 5, 4));
