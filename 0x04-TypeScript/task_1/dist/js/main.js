var printTeacher = function (firstName, lastName) { return '${firstName.charAt(0)}.${lastName}'; };
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName;
        this.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Sedric", "Muholo");
console.log(student.displayName());
console.log(student.workOnHomework());
//# sourceMappingURL=main.js.map