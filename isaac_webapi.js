const categories = require('category.js');

module.exports = {
    // Return all the categories
    getAllCategories() {
        let results = categories.find();
        return results
    },
    // Explain what function B does
    functionB() {
        console.log("Hello function B");
    }
}