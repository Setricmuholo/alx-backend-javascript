/*
 * a function that concanates arrays and srings
 * this is done through the spread syntax ie ...arrayN or ...string
 * it returns the spread syntax
 */

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
