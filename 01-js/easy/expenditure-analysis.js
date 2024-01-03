/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    for (let j = i+1; j < transactions.length; j++) {
         if(transactions[i].category === transactions[j].category){
          transactions[i].price = transactions[i].price + transactions[j].price;
          transactions.splice(j,1);
          j--;
         }
    } 
    result.push({category:transactions[i].category, totalSpent:transactions[i].price}); 
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
