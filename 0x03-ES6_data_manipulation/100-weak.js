const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  // Check if the endpoint exists in the weakMap
  if (!weakMap.has(endpoint)) {
    // If it doesn't exist, initialize the count to 0
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high.');
  }

  // Perform the API query
  // ...
};
