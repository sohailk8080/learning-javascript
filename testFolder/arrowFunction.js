//1. no parenthesis
const n = num => num*num;
console.log(n(5));

//2. blank parenthisis
const blank = () => 'Hello JS';
console.log(blank());

//3.more than 1 parameter
const twoParams = (a,b) => {
    return a*b
};
console.log(twoParams(3,2));

//4. with object
const pData = (person) => `${person.names} ${person.gender}`
const person = {
    names : 'Sohail',
    gender : 'Male'
}
const personalData = pData(person);
console.log(personalData);

//5. parameter and value
const userRole = (user='Admin', role='Super') => `Hello ${user} you are ${role}`
const ur1 = userRole();
console.log(ur1);

const ur2 = userRole('Super Admin', 'SU');
console.log(ur2);

//6. rest parameters....varargs
const par = (browser='chrome', ...details) => {   
    console.log(`Browser: ${browser}`);
    console.log('Other details:', details);
};
par();
par('safari', '118.0.16', 'x64');

//7. max using Math

const findMax = (a,b,c) => {
    return Math.max(a,b,c);
}
console.log('Max vaule is::'+findMax(10,30,20));