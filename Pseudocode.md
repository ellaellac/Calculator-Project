# PSEUDOCODE

- Breaking down a big problem into bite-sized chunks
- Those chunks should be in plain language

## HTML / CSS

- Something that has buttons on the page

## JS

- Register user input
  - Use DOM (event listeners) to respond when the user clicks on any button
- Keep track of the buttons (numbers/ operators) that a user has pressed
  - Use variables?
- Show the current number on the screen/ display
- New digits can be appended to a number
- When we press "=" button, we run a calculation
  - Then show the result on the screen
- Remove output on the display screen
  - "reset" where we're keeping track of numbers/ operators
- Restrict how many times we can press decimal "." button
- When we try to divide by zero, make sure we return something "useful" (don't let the calculator crash)
- Limit the length of the numbers users can input

```js
const number = 6;

// how do I show "number" on the screen?
```

## Guidelines

- Use functions to keep our logic separate
- One function should do one thing
- Setup/ scaffold our JS in a clean manner
  - DOM Elements/ global variables first
  - Functions
  - Add event listeners
  - Any starting logic
- Use `console.log()` to help you debug
