let name: string = "pius";

console.log(name)

let count: number = 10
name = 'paul';

console.log(name)

count = 5

import travisLog, {Gender, IPersonData, Person} from './tools';
/*
const person1 = new Person(
    "fathia",
    "salaudin",
    "female",
    1.7,
    ["singing","baking","etc"],
    new Date("1990-08-08"),
    true
);*/

const person1Data: IPersonData = {
    firstName: "Fathia",
    lastName: "Salaudin",
    gender: Gender.F,
    height: 1.7,
    hobbies: ["singing","baking","etc"],
    birthday: new Date("1990-08-08"),
    isAlive: true

}
 const person1 = new Person(person1Data);

 const pronoun = person1.gender === Gender.F? "he": "she";

travisLog(`the first person is ${person1.firstName} ${person1.lastName}, 
${pronoun} likes ${person1.hobbies.join(" , ")} ${pronoun} was born on
${person1.birthday.toLocaleDateString("en-NG")}`);
travisLog(person1.firstName);