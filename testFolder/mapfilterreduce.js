//map

let colors = [1,2,3,4]
colors.map((c)=>console.log(c*2));

//-->fahrenheit to Celcius (f-32)*5/9
let fah = [40,50,60,70]

function fahToCel(ftc){
    return (ftc-32)*(5/9);
    
}
let con = fah.map(fahToCel);
console.log(con);

//----------------------------------------//

//filter

let employee = [
    {name:"Sohail", age:31, designation:"SDET"},
    {name:"John", age:31, designation:"Senior SDET"}
];
//employee.filter((emp)=> console.log(emp.age ===31));  //this returns boolean value :true/false
let res = employee.filter((emp)=> emp.age ===31 && emp.designation === "SDET");  
console.log(res);

//---------------------------------------//

//reduce

//>>>>>>>>>>>>>addition
let num = [1,2,3,4,5]
let total = num.reduce((acc, n) => acc + n, 0);
console.log(total);

//>>>>>>>>>>

let obj = [
    {subject:"Math", marks:90},
    {subject:"Science", marks:95}
];
let totalMarks = obj.reduce((acc, n) => acc + n.marks, 0);
console.log(totalMarks);

//>>>>>>>>>>>>>>>>>>>>min value
let numb = [10,5,25,15,7]
let minVal=numb.reduce((min, num) => {
    if(num > min){
        return min;
    }
    else{
        return num;
    }
    
}, numb[0]);
console.log("Minmum value from :"+numb+" is "+"\n"+minVal);
