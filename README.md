# Calculator-Project

# The goals for this project:

1.  A working Calculator:
    The main task is to create a Calculator based on the understanding ofJavaScript and to learn how to break down a problem.
2.  Practice using Git and GitHub flow:
    To get as much practice as possible using git, GitHuband the command line
3.  Apply what you are learning:
    Using HTML, SCSS, BEM, JavaScript learnt in the first 3 weeks of the course

# Project Requirements :

1.  A deployed website (using GitHub Pages)
2.  A public GitHub repository for your codebase
3.  A
    README.md
    with a short intro to the project
4.  At least 15 Git commits for the different stages in your development
5.  Be responsive and built mobile-first, it should work on different screen widths
6.  Accept a minimum of 2 inputs, perform an operation and show the output
7.  DOES NOT USE THE eval() method (as this is extremely dangerous)
8.  Code is highly readable (good naming and indented correctly)

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
