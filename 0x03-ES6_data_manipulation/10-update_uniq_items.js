export default function updateUniqueItems(itemMap) {
  // Check if the input is a map
  if (typeof itemMap !== "object" || itemMap === null || Array.isArray(itemMap)) {
    throw new Error("Cannot process. The input is not a map.");
  }

  // Iterate over each key-value pair in the map
  for (let item in itemMap) {
    if (itemMap.hasOwnProperty(item)) {
      let quantity = itemMap[item];
      
      // Check if the quantity is 1
      if (quantity === 1) {
        // Update the quantity to 100
        itemMap[item] = 100;
      }
    }
  }

  // Return the updated map
  return itemMap;
}

