"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    /*
    constructor(firstName: string, lastName: string, gender:"male" | "female", height: number = -1,hobbies: string[] = [], birthday: Date, isAlive: boolean = true){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }*/
    constructor(personData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
}
exports.Person = Person;
;
const travisLog = (output) => {
    console.log(output);
};
exports.default = travisLog;
//# sourceMappingURL=tools.js.map