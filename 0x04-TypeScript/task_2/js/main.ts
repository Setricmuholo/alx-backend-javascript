interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have break';
  workTeacherTasks = () => 'Getting to work';
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let results = undefined;
  (isDirector(employee)) ? results = employee.workDirectorTasks() : results = employee.workTeacherTasks();
  return results
}

type Subjects = "Maths" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Maths") {
    return "Teaching Math";
  } else {
      return "Teaching History";
  }
}

console.log(teachClass("Maths"));
