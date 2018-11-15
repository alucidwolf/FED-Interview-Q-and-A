# CSS Questions:

* What is CSS selector specificity and how does it work?
> The more explicit the selector, such as using an ID or multiple classes, will be the one applied to the element

> If the selectors are of equal specificity, then the last one in the stylesheet will be honored

> ID is the most specific selector, where as an HTML element like 'a' is the most generic
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
> Reset will attempt to remove any inherited browser styling, so that nothing is decorated and it needs to be done by the developer

> Normalize attempts to create consistency between browsers, like bolding all headings by default
* Describe Floats and how they work.
> Floats allow elements to be placed left/right inside a container with the text and inlines elements wrapping around the float elements
* Describe z-index and how stacking context is formed.
> Stacking only works on positioned elements and creates 'layers' of element that can overlap or sit on top of each other
* Describe BFC (Block Formatting Context) and how it works.
> It is the visual representation of the block elements on the page and how float elements interact with other elements

> Float, absolute positioned, tables, flex, grid, etc. are all elements that create BFC
* What are the various clearing techniques and which is appropriate for what context?
> Used to stop elements from floating that follow other floating elements so that they stack instead of render side-by-side
* How would you approach fixing browser-specific styling issues?
> Use a preprocessor that adds browser specific and webkit properties to selectors
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Are you familiar with styling SVG?
* Can you give an example of an `@media` property other than `screen`?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Describe pseudo-elements and discuss what they are used for.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
* What is the CSS `display` property and can you give a few examples of its use?
* What's the difference between inline and inline-block?
* What's the difference between the "nth-of-type()" and "nth-child()" selectors?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?