const fn = require('./isaac_webapi.js');

console.log(fn.getAll());
console.log(fn.getAllCategories());
console.log(fn.getTotalCategories());
console.log(fn.getAllItems());
console.log(fn.getTotalItems());
console.log(fn.getSpecificCategory('e'));
console.log(fn.getSpecificItem('a'));
fn.addCategory('Toys');
console.log(fn.getAllCategories());
fn.addItem('Toys', 'Action Figure');
console.log(fn.getAllItems());
console.log(fn.getTotalItemByCategory());
console.log(fn.getAll());