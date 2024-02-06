/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categories = {}; // Created a empty object

  for (let i = 0; i < transactions.length; i++) {
    const category = transactions[i]["category"];  // Extracted category
    const price = transactions[i]["price"];  // Extracted Price 
    if (!categories[category]) {  // Checking if category key is there or not (in categories )
      // if not , then creating one and assigning value which is also object
      categories[category] = {
        category,
        totalSpent: price,
      };
    } else {
      // otherwise just updaing total spent 
      categories[category].totalSpent += price;
    }
  }
  return Object.values(categories); // Returning only value from the category object 
}

module.exports = calculateTotalSpentByCategory;
