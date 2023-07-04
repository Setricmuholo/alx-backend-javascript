export default function cleanSet(Set, startString) {
  let result = "";
  Set.forEach((value) => {
    if (value.startsWith(startString)) {
      result += value.substring(startString.length) + "-";
    }
  });
  return result.slice(0, -1);
}

// Example usage
const mySet = new Set(["apple", "banana", "orange", "avocado", "pear"]);
const start = "a";
console.log(cleanSet(mySet, start)); // Output: "pple-vocado"

