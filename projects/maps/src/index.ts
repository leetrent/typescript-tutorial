import { User } from './User';
// import { Company } from './Company';
import { CustomMap } from './CustomMap';



// const company = new Company();
// console.log(company);

const user = new User();
console.log(user);

const customMap = new CustomMap('map');
customMap.addUserMarker(user);