/*
 * a function that returns a budget based on key names provided
 */

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

