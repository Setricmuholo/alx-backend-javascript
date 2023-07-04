/*
 * function that returns a boolean if all the elements in the array exist wthin the set
 */

export default function hasValuesFromArray(set, array) {
  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i])) {
      return false;
    }
  }
  return true;
}
