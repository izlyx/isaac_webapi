const categories = [
  {
    category: 'Home Appliances',
    items: ['Air Fryer', 'Oven', 'Microwave', 'Vacuum Cleaner', 'Fan']
  },
  {
    category: 'Clothes',
    items: ['Shirt', 'Pants', 'Dress', 'Skirt', 'Jacket']
  },
  {
    category: 'Food',
    items: ['Pre-cooked Meal', 'Frozen Chicken', 'Coke', 'Protein Powder', 'Fruit']
  },
  {
    category: 'Accessories',
    items: ['Hat', 'Umbrella', 'Sunglasses', 'Handbag', 'Belt']
  }
];

module.exports = {
    // 1. Return categories with items
    getAll() {
        return categories;
    },
    // 2. Return only categories
    getAllCategories() {
        return categories.map(i => i.category);
    },
    // 3. Return total count of categories
    getTotalCategories() {
        return categories.map(i => i.category).length;
    },
    // 4. Return only items
    getAllItems() {
        return categories.flatMap(i => i.items);
    },
    // 5. Return total count of items
    getTotalItems() {
        return categories.flatMap(i => i.items).length;
    },
    // 6. Return categories with specific name
    getSpecificCategory(a) {
        return categories.filter(i => i.category.includes(a));
    },
    // 7. Return item with specific name
    getSpecificItem(a) {
        return categories.flatMap(i => i.items).filter(items =>items.includes(a));
    },
    // 8. Add category
    addCategory(category) {
        if (!categories.find(c => c.category === category)) {
            categories.push({
                category, 
                items: [] 
            });
        }
    },
    // 9. Add item to category
    addItem(category, item) {
        const existingCategory = categories.find(i => i.category === category);
        if (existingCategory && !existingCategory.items.includes(item)) {
            existingCategory.items.push(item);
        }
    },
    // 10. Return item count by category
    getTotalItemByCategory() {
        return categories.map( i => ({
            category: i.category,
            items: i.items.length
        }))
    }
}