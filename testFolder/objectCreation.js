//1. Object literals

const obj = {
    name : 'Sohail',
    age : 31
};
console.log(obj.name + " " + obj.age);

//2. Constructor function

function car(model, type, year){
    this.model = model;
    this.type = type;
    this.year = year;
}
const carData = new car("BMW", "Sedan", 2010);
console.log(carData.model+ " " +carData.year);

//3. Class style

class A{
    constructor(a,b){
        this.a=a;           //Instance variable
        this.b=b;
    }
    addData(){
        console.log(`A is ${this.a} and B is ${this.b}`)
    }
}
//Instance of a class
const cl = new A('A','B');
console.log(cl.a+" "+cl.b);
cl.addData();

//4. Object.create

const empdata = {
printEmp:function(){
    console.log(`Hello this is ${this.empName} learning ${this.empLang}`);
}
};
const objData = Object.create(empdata);
objData.empLang = 'JS';
objData.empName = 'Sho';
objData.printEmp();

//5. Using Factory functions: returns an object
function funcFactory(d1, d2){
    return {
        d1: d1,
        d2: d2,
        printfactoryData : function(){
            console.log(`${this.d1} and ${this.d2} are same`);
        }
    }
}
const likeJS = funcFactory("awesome","JS");
likeJS.printfactoryData();









