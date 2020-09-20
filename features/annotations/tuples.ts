const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Annotate as Tuple:
const pepsi: [string, boolean, number] = ['brown', true, 41];

// Type Alias:
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 39];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

// Objects may be better than tuples:
const carStats = {
  horsepower: 400,
  weight: 3354,
};
