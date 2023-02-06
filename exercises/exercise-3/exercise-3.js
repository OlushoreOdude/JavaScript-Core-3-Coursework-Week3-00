let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function makeRecipt(arrObj){
let total = 0;

arrObj.forEach((obj, index) => {
let { itemName: item, quantity: numb, unitPrice: price} = obj;
  total += price;
  if(index === 0){
  console.log("QTY    ITEM   TOTAL");
  }
console.log(`${numb}      ${item}     ${price}`);
 // if( index === order.length -1){
  //}
})

console.log(`
Total: ${total}`);
}

makeRecipt(order);

// could calculate dynamic white space gap between item and price
