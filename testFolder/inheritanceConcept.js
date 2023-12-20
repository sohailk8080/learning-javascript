class car{
    wheels = 4;
    constructor(name, model, year){
        this.name=name;
        this.model=model;
        this.year=year;
        console.log("This is parent..checking super keyword");
    }
    drive(){
        console.log("This is Car class");
    }
}

class Daimler extends car{
    constructor(name, model, year){
        super(name, model, year)  //This will call base class constructor
        
    }
    drive(){
        console.log("This is Daimler class");
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
const daimler = new Daimler();
console.log("-----------------");
daimler.drive();