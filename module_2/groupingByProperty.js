/*In sales = [{ client, total }, ...], use reduce to generate an object where each key is a client 
and the value is the sum of all their total values.*/


const sales = [
  { client: 'Lucas', total: 100 },
  { client: 'Ana', total: 300 },
  { client: 'Ana', total: 50 },
  { client: 'Bob', total: 130 },
  { client: 'Tony', total: 150 },
  { client: 'Tony', total: 40 }
];

function groupSalesByClient(sales) {
  return sales.reduce((acc, { client, total }) => {
    acc[client] = (acc[client] || 0) + total;
    return acc;
  }, {});
}

console.log(groupSalesByClient(sales));



