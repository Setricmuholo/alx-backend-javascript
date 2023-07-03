/*
 * a function that returns an array of students for a specific city with there new grades
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((studen)t => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      if (gradeObj) {
        return { ...student, grade: gradeObj.grade };
      } else {
        return { ...student, grade: "N/A" };
      }
    });
}
