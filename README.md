# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- get a random advice everytime they click the button.

### Screenshot

![](images/mobile-version.png "mobile version")

![](images/image1-desktop.png "Desktop version")

![](images/desktop-hover%20state.png "Desktop Hover")

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- desktop-first workflow

### What I learned

The major thing I learned working with this project is how to use axios js with APIs.

and the second one is how to use the picture element in html to switch between images in different screen sizes.

```html
<picture class="img">
  <source
    media="(max-width:500px)"
    srcset="images/pattern-divider-mobile.svg" />
  <img src="images/pattern-divider-desktop.svg" alt="" srcset="" />
</picture>
```

```js
axios.get("https://api.adviceslip.com/advice").then((response) => {
  quote.innerHTML = `"${response.data.slip.advice}"`;
  adviceId.innerHTML = response.data.slip.id;
});
```

## Author

- Frontend Mentor - [@bashair0](https://www.frontendmentor.io/profile/bashair0)
#   a d v i c e - g e n e r a t o r  
 #   a d v i c e - g e n e r a t o r  
 