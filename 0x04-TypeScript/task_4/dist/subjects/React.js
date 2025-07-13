"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.React = void 0;
const Subject_1 = require("./Subject");
class React extends Subject_1.Subject {
    getRequirements() {
        return "Here is the list of requirements for React";
    }
    getAvailableTeacher() {
        const teacher = this.getCurrentTeacher();
        return teacher.experienceTeachingReact
            ? `Available Teacher: ${teacher.firstName}`
            : "No available teacher";
    }
}
exports.React = React;
