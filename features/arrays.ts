// Using Type Inference:
const carMakers = ['Ford', 'Toyota', 'Chevy'];

// Using type Annotations:
const carMakers2: string[] = ['Ford', 'Toyota', 'Chevy'];

// Any type array:
const carMakers3 = [];

// Empty arrary using type annotations:
const carMakers4: string[] = [];

// Complex objects
const dates = [new Date(), new Date()];

// 2-dimensional array
const carsByMake = [['F150'], ['Corolla'], ['Camaro']];

// 2-dimensional empty array using type annotations:
const carsByMake2: string[][] = [];

// Help with type inference when extracting values:
const car = carMakers[0];
const car2 = carMakers.pop();

// Prevent incompatible values from being added to array:
carMakers.push(100);

// Help with 'map':
carMakers.map((car: string): string => {
  return car;
});
