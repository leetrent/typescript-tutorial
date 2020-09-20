////////////////////////////////////////
// SUPERCLASS
////////////////////////////////////////
class Vehicle {
  constructor(public color:string) {}
  public drive(): void {
    console.log("Vehicle: driving...");
  }
  public honk() : void {
    console.log("Vehicle: beep beep...");
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);
vehicle.drive();
vehicle.honk();

console.log("------------------");

////////////////////////////////////////
// SUBCLASS
////////////////////////////////////////
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  public drive(): void {
    console.log("Car: driving...");
  }
}

const car = new Car(4, 'blue');
console.log(car.wheels);
console.log(car.color);
car.drive();
vehicle.honk();
