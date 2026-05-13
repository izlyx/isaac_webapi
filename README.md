# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax


## What It Does
My node module has a mini categories database using arrays with category and items being stored under it.

The node module can be used to get information about the data such as categories and items using functions **getAll( ), getAllCategories( )**, and **getAllItems( )**. 

It also is able to return the count using **getTotalCategories( )**, **getTotalItems( )**, **getTotalItemByCategory( )**.

Not only able to get all the information, it can also return specific data using **getSpecificCategory( )** and **getSpecificItem( )**.

Lastly, it is also able to add data using **addCategory( )** and **addItem( )**.

## How It Works

### *<ins>getAll( ) Functions</ins>*
**getAll( )** functions are used with **map( )** to return the data of that array. For example, if I want to return all the categories I will use ***map( i => i.category )*** to *get all the data from category*, returning all the categories in the array. To call the function, **console.log( )** is *required without any values needed*.

### *<ins>getTotal( ) Functions</ins>*
**getTotal( )** functions are used either **map( )** or **flatMap( )** depending on what data is needed with **.length** in order to *return the count*.

**map( )** - *used to transform each item and keeps the structure*

**flatMap( )** - *used to transform and removes one level of nesting*

So for **getTotalCategories( )** and **getTotalItemsByCategory( )**, **map( )** is used since there is no nesting involved and there is *only one value per item* while for **getTotalItems( )**, **flatMap( )** is used since there is nesting involved and its *an array per item*.

### *<ins>getSpecific( ) Functions</ins>*
**getSpecific( )** functions are used with **filter( )** and **includes( )**. These two work together to make this work.

**filter( )** - *same function as find( ) but instead of returning only the first item, it returns all the items*

**includes( )** - *used to ensure the filter( ) is filtering the value by including it*

Since **getSpecificItem( )** takes data from items and has nesting, **flatMap( )** is used before **filter( )** and **includes** in order for all the items to be together allowing the filtering to happen. **getSpecific( )** requires a value to filter and it is required to *include the same value as the in the function*. In the **console.log( )** any value can be input to filter the category and item.

### *<ins>add( ) Functions</ins>*
**addCategory( )** and **addItem( )** functions may look different but the concept is the same. Both uses **find( )** to find the value of the category or item it is trying to add and the **if loop** to *check if the category or item exists already* before adding it and pushing it after if it *does not exist*.

**find( )** - *same function as filter( ) but instead of returning all the items, it returns only the first item*
**push( )** - *used to add data into an array*

For **addCategory( )** a value is required for find for the category with that value and **!** is used to make sure *it is not that value*. Then the **if loop** works if the value *does not exist* and pushes the value and creates a new category and item array.

For **addItem( )** *both category value and item value* is required for the item to be pushed. A **constant** is created for the if loop to function and that constant is used with **&&** to work together with **includes( )** to make sure the item *does not exist* before pushing it into the array. The category value is required to know which category the item is added into and the item value is to create a new item to be pushed.

## My Website
https://www.lazada.sg

# References
I used ChatGPT to learn about the different functions such as flatMap(), filter(), and includes() and also used it to generate ideas for the application