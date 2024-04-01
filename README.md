# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](images/Capture%20d'écran%202024-04-01%20194215.png)


### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/interactive-rating-component-OkXTr28fwA)
- Live Site URL: [Live Site](https://mouwaficbdr.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Learned about computed values.

```js
const computedStyle = getComputedStyle(document.documentElement);
  event.target.style.backgroundColor =
    computedStyle.getPropertyValue('--light-grey');
  event.target.style.color = computedStyle.getPropertyValue('--white');
```

## Author

- Frontend Mentor - [@Mouwvfic](https://www.frontendmentor.io/profile/@mouwaficbdr)
- Twitter - [@DevOnRoad](https://www.twitter.com/DevOnRoad)
