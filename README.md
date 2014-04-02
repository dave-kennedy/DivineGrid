# Divine Grid

### What is the Divine Grid?

The Divine Grid is a fluid, responsive CSS grid framework based on the divine proportion, also known as the golden ratio.

It is extremely lightweight, requiring only a small amount of additional markup to your document.

### What are the dimensions?

The basic grid framework is 988 pixels wide and consists of six columns that are 148 pixels wide each plus a gutter that is 20 pixels wide.

### How do I use the Divine Grid?

**Step one:** Download the grid.css file from the css directory and include it in your document.

**Step two:** Apply a class of .container to the body element in your document.

**Step three:** Create a div element within the body element of your document. Apply a class of .columns to the div element you just created.

**Step four:** Within the div element you just created, create a div element for each column you would like to fill with content. Each div can have one of the following classes:

* .col-1 -- Spans one column
* .col-2 -- Spans two columns
* ...
* .col-6 -- Spans six columns

If you want to append columns to the right side of the div element, you can use any of the following classes:

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

**Step five:** Apply a class of .divine to a div element.

If you want to make any div element into a divine, or golden, rectangle, simply apply a class of .divine to the element. The height of the element is calculated by dividing the width of the element by the divine proportion, also known as the golden ratio, which is approximately 1.618.

### Where can I see examples of the Divine Grid?

Check out the following files for examples of the Divine Grid in action:

* columns.html -- This file shows the functionality of the basic grid framework.
* demo.html -- This file shows a sample site using the Divine Framework. There are at least seven golden rectangles on the page. See if you can spot them all!
* grid.html -- This file shows a simple six by six grid made of golden rectangles.

If you want to open these files in your browser, make sure you also download the style.css file from the css directory as well as the image files in the img directory.

Finally, have a gander at the [Divine Template](http://www.github.com/davidkennedy85/DivineTemplate) - a fluid, responsive CSS template based on the Divine Grid.

### What other features does the Divine Grid support?

As mentioned above, the Divine Grid is a responsive grid framework. If the user's browser is less than 988 pixels wide, the grid will shrink. If the user's browser falls below 865 pixels wide, all of the columns will stack vertically and fill any remaining horizontal space. Of course, this means that any golden rectangles on the page will lose their divinity.

Finally, the Divine Grid comes with one additional class, which is the .media class. You can read all about the media object on [Nicole Sullivan's blog](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/). The media object should resemble the following markup:

    <div class="media">
		<img src="[Image source goes here]" class="img" />
		<div class="bd">
			[Text goes here]
		</div>
	</div>

### Thanks

Thanks to [Harry Roberts](http://www.csswizardry.com/), creator of inuit.css, from which the Divine Grid draws heavy inspiration. Also, many thanks to [Nicole Sullivan](http://www.stubbornella.org/) for pointing out the secret benefit of the overflow property and making the media object a common practice. Finally, thanks to [Ethan Marcotte](http://www.unstoppablerobotninja.com/) for teaching me everything I know about fluid grids and responsive design, and to [Chuck Greene](http://www.ideabook.com/tutorials/page_layout/the_grid_an_invisible_framewor.html) for teaching me about grids in general.
