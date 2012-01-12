# Divine Grid
## by David Kennedy
## http://daveden.wordpress.com

### What is the Divine Grid?

The Divine Grid is a fluid, responsive CSS grid framework based on the divine proportion, also known as the golden ratio.

It is extremely lightweight, requiring only a small amount of additional markup to your document.

### What are the dimensions?

The basic grid framework is 988 pixels wide and consists of six columns that are 148 pixels wide each plus a gutter that is 20 pixels wide on the right.

### How do I use the Divine Grid?

1. Download the grid.css file from the css directory and include it in your document.

2. Apply a class of .container to the body element in your document.

3. Create a div element within the body element of your document. Apply a class of .columns to the div element you just created.

4. Within the div element you just created, create a div element for each column you would like to fill with content. Each div can have one of the following classes:

    * .col-1 -- Spans one column
    * .col-2 -- Spans two columns
    * ...
    * .col-6 -- Spans six columns

5. If you want to append columns to the right side of the div element, you can use any of the following classes:

    * .app-1 -- Appends one column
    * .app-2 -- Appends two columns
    * ...
    * .app-5 -- Appends five columns

Similarly, you can use any of the following classes to prepend columns to the left side:

    * .pre-1 -- Prepends one column
    * .pre-2 -- Prepends two columns
    * ...
    * .pre-5 -- Prepends five columns

Nothing about the basic grid framework is divine until you:

6. Download the divine.js file from the js directory and include it in your document.

If you want to make any div element into a divine, or golden, rectangle, simply apply a class of .divine to the element. The jQuery script will calculate the height of the element by multiplying the width of the element by the divine proportion, also known as the golden ratio, which is approximately 1.618.

### Where can I see examples of the Divine Grid?

Check out the following files for examples of the Divine Grid in action:

    * columns.html -- This file shows the functionality of the basic grid framework.
    * demo.html -- This file shows a sample site using the Divine Framework. There are at least seven golden rectangles on the page. See if you can spot them all!
    * grid.html -- This file shows a simple six by six grid made of golden rectangles.