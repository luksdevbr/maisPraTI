/*Given an array products = [{ name, price }, ...], create a function that returns a new array
containing only the names, sorted by price in ascending order, using map and sort.*/

const products = [
  { name: 'AMD Radeon RX 7700 XT 12GB', price: 349.99 }, 
  { name: 'AMD Ryzen 5 7600X', price: 230 }, 
  { name: 'ASUS TUF Gaming B650-Plus', price: 220 },
  { name: 'G.Skill Flare X5 32GB (2x16GB) DDR5-6000', price: 130 },
  { name: 'Corsair RM750x 750W', price: 120 },
  { name: 'SSD Samsung 970 EVO Plus 1TB NVMe M.2', price: 100 }
];

function getNamesSortedByPrice(products) {  
  return [...products]
    .sort((a, b) => a.price - b.price)
    .map((product) => product.name);
}

console.log(getNamesSortedByPrice(products));
