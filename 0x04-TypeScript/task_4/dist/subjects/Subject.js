"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    getCurrentTeacher() {
        if (!this.teacher) {
            throw new Error('Teacher not set');
        }
        return this.teacher;
    }
}
exports.Subject = Subject;
