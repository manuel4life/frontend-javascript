import { Subject } from './Subject';
import { Teacher } from './Teacher';

export class React extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    const teacher = this.getCurrentTeacher();
    return teacher.experienceTeachingReact
      ? `Available Teacher: ${teacher.firstName}`
      : "No available teacher";
  }
}