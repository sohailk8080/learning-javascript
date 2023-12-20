class car{
    static wheels = 4;
    constructor(name, model, year){
        this.name=name;
        this.model=model;
        this.year=year;
    }
    static drive(name){
        console.log(name + " is being driven");
    }
}

const carDetails = new car("Audi", "Sedan", 2023);
console.log("Car details are "+ carDetails.name+ " "+carDetails.model+" "+carDetails.year + " and wheels = "+ car.wheels);
car.drive(carDetails.name);