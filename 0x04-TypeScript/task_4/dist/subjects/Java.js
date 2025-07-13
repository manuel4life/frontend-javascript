"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Java = void 0;
const Subject_1 = require("./Subject");
class Java extends Subject_1.Subject {
    getRequirements() {
        return "Here is the list of requirements for Java";
    }
    getAvailableTeacher() {
        const teacher = this.getCurrentTeacher();
        return teacher.experienceTeachingJava
            ? `Available Teacher: ${teacher.firstName}`
            : "No available teacher";
    }
}
exports.Java = Java;
