import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    const teacher = this.getCurrentTeacher();
    return teacher.experienceTeachingC
      ? `Available Teacher: ${teacher.firstName}`
      : "No available teacher";
  }
}