let orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
];

let totalAmount = orders.reduce((all,item) => {
  console.log(`all: ${all}, item: ${item.amount}`);
  return all + item.amount;
},0);


let totalAmount2 = orders.reduce((all,item) => all + item.amount, 0);

console.log(totalAmount);
console.log(totalAmount2);

let data = [
  ['mark johansson', 'waffle iron', 80, 2],
  ['mark johansson', 'blender', 200, 1],
  ['mark johansson', 'waffle iron', 10, 4],
  ['Nikita Smith', 'waffle iron', 80, 1],
  ['Nikita Smith', 'knife', 10, 2],
  ['Nikita Smith', 'pot', 20, 3],
];

let output = data.reduce((customers,line) => {
  customers[line[0]] = customers[line[0]] || [];
  customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3]
  }) 
  return customers; 
},{});

console.log(JSON.stringify(output,null,2));