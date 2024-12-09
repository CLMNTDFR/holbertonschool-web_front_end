# SASS & SCSS Project

<img width="1173" alt="sass" src="https://github.com/MathieuMorel62/holbertonschool-web_front_end/assets/113856302/9f9d32bf-7fd6-4207-a78b-9775bc329159">

## SASS/SCSS Project Description and Features

This project offers an in-depth exploration of Sass & Scss, two powerful CSS preprocessors, revolutionizing the creation of advanced and dynamic web styles. At the heart of this project is a demonstration of how Sass & Scss transform web development efficiency by significantly increasing productivity, improving code organization, and greatly simplifying CSS maintenance.

Sass & Scss stand out for their ability to introduce advanced features such as variables, mixins, inheritance, and functions into the CSS writing process. This approach not only allows for optimized code reuse but also a more rigorous structure and automation of repetitive tasks. This project highlights the efficiency of these features in optimizing style management and implementing responsive designs.

By adopting Sass & Scss, developers can break free from the traditional limits of CSS, paving the way for more creative and technical design possibilities.

## Resources
### Read or Watch:

- [Sass Basics](https://sass-lang.com/guide/)
- [Sass flow control directives: @if, @for, @each and @while](https://sass-lang.com/documentation/at-rules/control/)
- [Sass references](https://sass-lang.com/documentation/)

## Requirements

- Languages: Sass/Scss.
- Sass Version: 3.7.4 or later.
- Operating System: Ubuntu 18.04 LTS.
- Authorized text editors: vi, vim, emacs.



## Code Examples
### Sass

In this example, we define two Sass variables: `$font-stack` for the font and `$primary-color` for the main color. Then, we apply these variables to the HTML document body, setting the font and text color.

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

```

### Nesting Example

Nesting is a key feature of Sass that allows for more organized and hierarchical CSS writing. Here is an example of nesting:

```scss

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { 
    display: inline-block; 
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

## Author

Clément DEFER