const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Destructuring

// Normal ES2015
//const { age } = profile;

// With annotations
const { age }: { age: number } = profile;

// Normal ES2015:
// const {
//   coords: { lat, lng },
// } = profile;

// With annotations
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
