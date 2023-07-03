/*
 * a function that returns the sum of all students ids
 */

export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
