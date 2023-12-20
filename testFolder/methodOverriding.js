class car{
    wheels = 4;
    constructor(name, model, year){
        this.name=name;
        this.model=model;
        this.year=year;
    }
    drive(name){
        console.log("This is Car class");
    }
}

class Audi extends car{
    wheels =2;
    drive(){
        console.log("This is Audi class");
    }

}

const Car = new car();
Car.drive();
const audi = new Audi();
audi.drive();
console.log(audi.wheels);

//preference will always be given to child class variables/functions