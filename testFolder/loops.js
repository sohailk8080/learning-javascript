//for..of

const num = [1,2,3,4];
for(const n of num){
console.log(n);
}

console.log("--------------");

//for..in

const a = {
    name : "sohail",
    age: 31,
    city : "Navi Mumbai"
}
for(const key in a){
    console.log(key +" : "+ a[key]);
}