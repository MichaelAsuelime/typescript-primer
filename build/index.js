"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let name = "pius";
console.log(name);
let count = 10;
name = 'paul';
console.log(name);
count = 5;
const tools_1 = __importStar(require("./tools"));
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
const person1Data = {
    firstName: "Fathia",
    lastName: "Salaudin",
    gender: "female",
    height: 1.7,
    hobbies: ["singing", "baking", "etc"],
    birthday: new Date("1990-08-08"),
    isAlive: true
};
const person1 = new tools_1.Person(person1Data);
const pronoun = person1.gender === "male" ? "he" : "she";
(0, tools_1.default)(`the first person is ${person1.firstName} ${person1.lastName}, 
${pronoun}likes ${person1.hobbies.join(",")}. ${pronoun} was born on
${person1.birthday.toLocaleDateString("en-NG")}`);
(0, tools_1.default)(person1.firstName);
//# sourceMappingURL=index.js.map