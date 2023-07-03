/*
 * a function that returns an array of objects who are located in a specific city
 */

export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === city);
}
