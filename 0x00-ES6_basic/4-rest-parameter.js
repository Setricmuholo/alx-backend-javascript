/*
 * a function that returns the number of arguments passed to it
 * using the rest parameter
 * this will be done through the function with the rest parameter syntax
 * and return the length of the rest parameter array
 */

export default function returnHowManyArguments(...args) {
  return args.length;
}
