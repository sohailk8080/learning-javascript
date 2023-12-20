class abc{
    constructor(name, type, year){
        this.name =name;
        this.type=type;
        this.year=year;
    }
    refuelCar(){
        console.log(this.name+" got refueled");
        console.log(`its a ${this.year}'s ${this.type}`);
    }
}
    const car = new abc("BMW","Sedan","2010");
    console.log(car.name);
    console.log(car.type);
    console.log(car.year);
    car.refuelCar();