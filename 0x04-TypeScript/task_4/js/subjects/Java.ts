import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class Java extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    const teacher = this.getCurrentTeacher();
    return teacher.experienceTeachingJava
      ? `Available Teacher: ${teacher.firstName}`
      : "No available teacher";
  }
}