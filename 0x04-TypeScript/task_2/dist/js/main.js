var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'Cannot work from home'; };
        this.getCoffeeBreak = function () { return 'Cannot have break'; };
        this.workTeacherTasks = function () { return 'Getting to work'; };
    }
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    var results = undefined;
    (isDirector(employee)) ? results = employee.workDirectorTasks() : results = employee.workTeacherTasks();
    return results;
}
function teachClass(todayClass) {
    if (todayClass === "Maths") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}
console.log(teachClass("Maths"));
//# sourceMappingURL=main.js.map