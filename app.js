const fn = require('./isaac_webapi.js');

console.log(fn.getAll());
console.log(fn.getAllCategories());
console.log(fn.getAllItems());
console.log(fn.getSpecificCategory('A'));
console.log(fn.getCategoryWithItem('Shirt'));