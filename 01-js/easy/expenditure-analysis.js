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
  let ans = [];
  for (let index = 0; index < transactions.length; index++) {
    const category = transactions[index].category;
    const price = transactions[index].price;
    let flag = false;
    for (let i = 0; i < ans.length; i++) {
      if (ans[i].category == category) {
        ans[i].totalSpent += price;
        flag = true;
        break;
      }
    }
    if (!flag) {
      ans.push({ category, totalSpent: price });
    }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
