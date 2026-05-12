const categories = require('./category.js');

module.exports = {
    //Return categories with items
    getAll() {
        return categories;
    },
    // Return only categories
    getAllCategories() {
        return categories.map(i => i.category);
    },
    // Return only items
    getAllItems() {
        return categories.map(i => i.items);
    },
    // Return categories with specific name
    getSpecificCategory(e) {
        return categories.filter(i => i.category.includes(e));
    },
    // Return category with specific item
    getCategoryWithItem(e) {
        return categories.filter(i => i.items.includes(e));
    },
}