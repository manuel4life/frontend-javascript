import { Teacher } from './Teacher';

export abstract class Subject {
  protected teacher: Teacher | undefined;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }

  protected getCurrentTeacher(): Teacher {
    if (!this.teacher) {
      throw new Error('Teacher not set');
    }
    return this.teacher;
  }
}