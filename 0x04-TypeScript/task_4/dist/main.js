"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cpp_1 = require("./subjects/Cpp");
const Java_1 = require("./subjects/Java");
const React_1 = require("./subjects/React");
const cpp = new Cpp_1.Cpp();
const java = new Java_1.Java();
const react = new React_1.React();
const cTeacher = {
    firstName: 'Kweku',
    lastName: 'Asante',
    experienceTeachingC: 10
};
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
