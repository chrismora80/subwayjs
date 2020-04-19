# subwayjs

# Code-Quiz


## Summary
* HTML and CSS and Javascript documents create a quiz with multiple choice questions with Javascript trivia
* This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document
* This project has the following features:
  - A Start Quiz button
  - This starts a timer for the user, each question averages 15 seconds each for a total time of 75 seconds + 1.
  - Features questions, and multiple choice answers
  - If questions are answered incorrectly, 10 seconds are deducted off remaining time
  - Answers are recording using an event listener, "click" and tracks correct answers
  - Final score which is calculated using time remaining
  - A Summary of how many questions answered correctly
  - Input area to record initials
  - A Submit button
      - Submit buttom saves initials and score to local storage
      - A Highscores

### Psuedo code:
1. Create a timer attached to a button with a starting value of 0
2. When timer is pressed start a reverse countdown
3. Create a 0 for countdown
4. When countdown starts, start quiz
5. Start Quiz will be on appended page
6. Append the question: choices
    - When user selects the right answer, textcontent "Correct!"
    - When user selects the right answer, textcontent "Wrong!"
    - Final score will keep track of how many the user got right
    - Left over time will be deducted from final score
    - Final Score Appended page
    - Captures local storage
    - Retrieved highscores
    
#### This project has media Queries

##### Features:
* Index.html
* Styles.css
* Script.js
