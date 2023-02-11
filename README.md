** Developer: Orna Reynolds **

[Visit live website]()


## Table of Content
  - [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Goals](#site-owner-goals)
  - [User Experience](#user-experience)
    - [Target Audience](#target-audience)
    - [User Requirements and Expectations](#user-requirements-and-expectations)
  - [User Stories](#user-stories)
    - [Site User](#site-user)
    - [Site Owner](#site-owner)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Fonts](#fonts)
    - [Structure](#structure)
    - [Wireframes](#wireframes)
  - [Technologies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries & Tools](#frameworks-libraries--tools)
  - [Features](#features)
  - [Validation](#validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JavaScript Validation](#javascript-validation)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
  - [Testing](#testing)
    - [Performing tests on various devices](#performing-tests-on-various-devices)
    - [Browser compatibility](#browser-compatibility)
    - [Testing user stories](#testing-user-stories)
  - [Bugs](#bugs)
  - [Deployment](#deployment)
  - [Credits](#credits)
  - [Acknowledgements](#acknowledgements)

## Project Goals

The goal of this project was to create an interactive and user-friendly quiz that tests knowledge of world geography.

### User Goals

- Take a quiz that is fun and informative 
- Challenge themselves at different difficulty levels 

### Site Owner Goals

- Create a quiz with accurate information on world geography
- Design a quiz to visually apeal and engage the user
- Ensure accessibility and responsivity across different screen sizes

## User Experience

### Target Audience

- Anyone with an interest in world geography 
- Anyone who wants to test their knowledge of world geography 

### User Requirements and Expectations

- Simple, clear and interative layout 
- Responsiveness across different screen levels 
- Visible navigation to different difficulty levels, reset button

## User Stories
### Site User

1. I want to easily understand what the game is and how to play the game from the first page
2. I want to have my name displayed while playing
3. I want to be able to choose from different difficulty levels
4. I want incorrect answers to light up red and correct answers to light up green
5. I want 3 guesses only and then to move onto new screen
6. I want to get higher points when i click country correctly first time compared to second and third
7. I want to play game on phone and on laptop 
8. I want score and question number I am on to be displayed as I play the game
9. I want to be able to zoom into map so I am able to click correct country even if small
10. I want play again button at end of quiz and be able to change difficulty level for new game

### Site Owner

11. I want user to easily understand how to play game
12. I want quiz be resposnsive on different devices
13. I want a 404 page to show in case of broken link
14. I want user to be able to challenge themselves through different difficulty levels

## Design

### Colour Scheme
<img src="assets/docs/readme_screenshots/colormap.png">
The colour palette was generated by <a href="http://colormind.io/image/">Colormind</a> when submitted a world map found on a google search. 

### Fonts
Itim from [Google Fonts](https://fonts.google.com/specimen/Itim?preview.text=Geography&preview.text_type=custom) was chosen as the font as it was clear, playful and had a hand-written feel which I felt suited the theme of the game. 

### Structure

The structure of the website was designed to be easy to navigate. 

The game consist of the following screens:

- A home page / start screen with game title, instructions how to play game and user login
- Choose game difficulty level screen with name displayed in top corner of screen
- Main game screen - it contains interactive map to click, questions clearly displayed, number of questions remaining in the round and current score which dynamically updates
- End page with most recent score from local storage
- The contact page modal with contact form which allows users to send an email to the developer and provide their feedback
- A separate 404 error page

### Wireframes

<details><summary>index.html</summary>
<img src="assets/docs/wireframes/index.jpg">
</details>
<details><summary>level.html</summary>
<img src="assets/docs/wireframes/level.jpg">
</details>
<details><summary>game.html</summary>
<img src="assets/docs/wireframes/game.jpg">
</details>
<details><summary>end.html</summary>
<img src="assets/docs/wireframes/end.jpg">
</details>
<details><summary>feedback form</summary>
<img src="assets/docs/wireframes/feedback.jpg">
</details>

## Technologies Used

### Languages

- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Tools

- Favicon.cc for getting the site favicon
- Font Awesome for main title of game
- Git was used for version control to push the code to GitHub
- GitHub was used as a remote repository to store project code
- Google Fonts
- Chrome dev tools were used for debugging of the code and check site for responsiveness
- WC3 Validator, Jigsaw W3 Validator, JShint, Wave Validator and Lighthouse were all used to validate the website
- Befunky to add text to screenshots

## Features

The website has 4 webpages consisting of a number of particular features

### Home page
The home page contains:
- The title of the game with spinning world icon (user-stories: 1)
- A short explanation of how to play (user-stories: 1)
- An input form for the user to enter their name (user-stories: 2)
- A start game button

### Standout feature: 

#### Username input
- For start game button to bring user to next page, the user needs to enter a username of at least 4 characters long into the input field. If the input field is left blank and user clicks out of field, the background of the input field changes to red and the placeholder text changes to remind the user to complete the field. Furthermore, if only 3 letters are entered for example, then a alert message is displayed with message that at least 4 characters long username needs to be chosen. Once a valid username has been provided, the username is displayed next to the user icon on the next screen and user is able to select the difficulty level of the game.
- Username remains displayed on all game screens
- (user-stories: 2)

### Level page 
- Username displayed at top of page (user-stories: 2)
- buttons to choose difficulty level of game by fetching different json files that contain increasingly difficult questions (user-stories: 3, 14)

### Game page
- Interactive world map (svg) where the countries are individually defined into paths
- Heads up display that contains the username as input by user on home page (user-stories: 2), dynamic questions and score counter (user-stories: 6, 8)
- Question display that updates country every new question to a max of 10. The countries do not repeat. 

### Standout feature: 

###  Interactive world map
- When question is asked map can be clicked to try and answer the question. If correct answer is picked, the country lights ip green and if the incorrect country is picked the country lights up red (user-stories: 4). A new question appears either if correct country is chosen or user has reached max guesses(3) (user-stories: 5). Scores updates depending on how many guesses it took the user to get the right country (1st attempt = 3 points, 2 attempt = 2 points, 3rd attempt = 1 point) (user-stories: 6)

### End page 
- Dislays most recent score along with username (user-stories: 2)
- Play again button that allow user to restart the game by bringing back to select difficulty screen (user-stories: 10)
- Wanted to include code for a modal pop up feedback form that was hidden until feedback button was clicked and high scores table which i wpuld have gotten from local storage but i ran out of time. This will be future features of the website however.  
## Validation

### HTML Validation

The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors.
<details><summary>Index</summary>
<img src="assets/docs/validation_screenshots/indexhtml.png">
</details>

<details><summary>Level</summary>
<img src="assets/docs/validation_screenshots/levelhtml.png">
</details>

<details><summary>Game</summary>
<img src="assets/docs/validation_screenshots/gamehtml.png">
</details>

<details><summary>End</summary>
<img src="assets/docs/validation_screenshots/endhtml.png">
</details>

<details><summary>404</summary>

</details>

### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.
Style.css passes with no errors. 

<details><summary>Style.css</summary>
<img src="assets/docs/validation_screenshots/stylecss.png">

### JavaScript Validation

JSHint JS Validation Service was used to validate the Javascript files. 

<details><summary>index.js</summary>

</details>
<details><summary>level.js</summary>

</details>
<details><summary>game.js</summary>

</details>
<details><summary>end.js</summary>

</details>

### Accessibility

The WAVE accessibility evaluation tool was used to ensure the website met high accessibility standards.

<details><summary>Index</summary>
<img src="assets/docs/validation_screenshots/indexwave.png">
</details>

<details><summary>Level</summary>
<img src="assets/docs/validation_screenshots/levelwave.png">
</details>

<details><summary>Game</summary>
<img src="assets/docs/validation_screenshots/gamewave.png">
</details>

<details><summary>End</summary>
<img src="assets/docs/validation_screenshots/endwave.png">
</details>

### Performance

Google Lighthouse in Google Chrome Developer Tools was used to test the performance of the website. Every page scored in the high 90s for mobile and desktop. 

## Testing

### Performing tests on various devices

The website was tested using Google Chrome Developer Tools to check responsiveness at different screen sizes. 

The website was tested on the following devices:
- Macbook Pro 2017
- OnePlus Nord
- OnePlus Nord CE 2

### Browser compatibility

- Testing has been carried out on the following browsers:
  - Googe Chrome 
  - Safari


### Testing user stories

1. I want to easily understand what the game is and how to play the game from the first page

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Title of game and short explanation | Read the text | User immediately understands how to play | Works as expected |

<details><summary>Screenshot</summary>
<img src="assets/docs/readme_screenshots/userstories/titleandexplanation.png">
</details>

2. I want to have my name displayed while playing

| **Feature**    | **Action**                                                           | **Expected Result**                               | **Actual Result** |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------- | ----------------- |
| Username input | Type user name that is at least over 4 characters and click start game button | User is brough to next page and name is displayed at top of page | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/readme_screenshots/userstories/namedisplaypart1.png">
<img src="assets/docs/readme_screenshots/userstories/namedisplaypart2.png">
</details>

3. I want to be able to choose from different difficulty levels

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Different difficulty selection buttons | Click easy, medium or hard button | Different questions are loaded from different json files depending on choice | Works as expected |

<details><summary>Screenshot</summary>
<img src="assets/docs/readme_screenshots/userstories/buttonchoose.png">

Easy array loads and easy questions displayed when easy buuton clicked
<img src="assets/docs/readme_screenshots/userstories/easy.png">

Medium array loads and medium questions displayed when medium buuton clicked
<img src="assets/docs/readme_screenshots/userstories/medium.png">

Hard array loads and hard questions displayed when hard buuton clicked
<img src="assets/docs/readme_screenshots/userstories/hard.png">
</details>

4. I want incorrect answers to light up red and correct answers to light up green

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Interactive world map | Click a country on the map | Light up green or red depending on choice | Works as expected |

# Go in readme file itself or raw data to see rest of readme file is not showing here in preview or github preview for some reason

<details><summary>Screenshots</summary>
<img src="assets/docs/readme_screenshots/userstories/correctanswer.png">
<img src="assets/docs/readme_screenshots/userstories/incorrectanswer.png">

5. I want 3 guesses only and then to move onto new question

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Interactive world map | Click wrong country 3 times | Move to new question | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/readme_screenshots/userstories/1_3wronganswer.png">
<img src="assets/docs/readme_screenshots/userstories/2_3wronganswer.png">
<img src="assets/docs/readme_screenshots/userstories/3_3wronganswer.png">

6. I want to get higher points when i click country correctly first time compared to second and third

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Interactive world map | Click right answer on 1st attempt, then on 2nd for next question and then on 3rd for next question | Points should go up by 3, 2, 1 respectively | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/readme_screenshots/userstories/3points.png">
<img src="assets/docs/readme_screenshots/userstories/2points.png">
<img src="assets/docs/readme_screenshots/userstories/1point.png">

7. I want to play game on phone and on laptop 

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Responsiveness on defferent devices | Play game on different screen widths and devices | All text should be visible and zoom of map should allow user to interactive with the large map when playing on smaller devices | Zoom did not work as expected as started to log different countries as dimensions as map changing. Decided to remove zoom function and did not have time to redo code correctly |

8. I want score and question number I am on to be displayed as I play the game

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Heads up Display | Play game | score and questions update dynamically | Works as expected |

<details><summary>Screenshots</summary>
<img src="assets/docs/readme_screenshots/userstories/3points.png">
<img src="assets/docs/readme_screenshots/userstories/2points.png">
<img src="assets/docs/readme_screenshots/userstories/1point.png">

9. I want to be able to zoom into map so I am able to click correct country even if small

Was removed as affected integrity of game play.

10. I want play again button at end of quiz and be able to change difficulty level for new game

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Play again button | Press the button | User is brough back to difficulty selection page | Works as expected |

11. I want user to easily understand how to play game

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Title of game and short explanation | Read the text | User immediately understands how to play | Works as expected |

<details><summary>Screenshot</summary>
<img src="assets/docs/readme_screenshots/userstories/titleandexplanation.png">
</details>

12. I want quiz be resposnsive on different devices 

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Responsiveness on defferent devices | Play game on different screen widths and devices | All text should be visible and zoom of map should allow user to interactive with the large map when playing on smaller devices | Zoom did not work as expected as started to log different countries as dimensions as map changing. Decided to remove zoom function and did not have time to redo code correctly |

13. I want a 404 page to show in case of broken link

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| 404 page | Loading error | User brough to custom 404 page and given option to return to home page | Works as expected |

<details><summary>Screenshot</summary>
<img src="assets/docs/readme_screenshots/userstories/404.png">

14. I want user to be able to challenge themselves through different difficulty levels

| **Feature**       | **Action**        | **Expected Result**                  | **Actual Result** |
| ----------------- | ----------------- | ------------------------------------ | ----------------- |
| Different difficulty selection buttons | Click easy, medium or hard button | Increasing difficult questions are loaded from different json files depending on choice | Works as expected |

<details><summary>Screenshot</summary>
<img src="assets/docs/readme_screenshots/userstories/buttonchoose.png">

Easy array loads and easy questions displayed when easy buuton clicked
<img src="assets/docs/readme_screenshots/userstories/easy.png">

Medium array loads and medium questions displayed when medium buuton clicked
<img src="assets/docs/readme_screenshots/userstories/medium.png">

Hard array loads and hard questions displayed when hard buuton clicked
<img src="assets/docs/readme_screenshots/userstories/hard.png">
</details>

## Bugs

| Bug                                                                                                                                         | Fix                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Colors were not showing up until teh 2nd click(2nd right or wrong answer)            | function was being told needed to be clciked twice to work, removed 2nd onclick to get colors appearing when answers first clicked  |
| 3 undefined country clicks caused random countries to light up  | added paraeter to else statement abd gicing half the undefined countries a data number of x                                          |
  

## Deployment

### GitHub Pages
The website was deployed using GitHub Pages:
1. In git hub, go to settings tab
2. On the left hand menu, select Pages
3. For the source select Branch: main
4. Once saved, GitHub will refresh and your website will be publishd from GitHub repository
5. The link to your published website will appear after a minute or two

## Credits

### Images

Interactive World Map

[Simple Maps](https://simplemaps.com/resources/svg-world)


### Code

Interactive World Map 

[Make a Clickable SVG Map using HTML & CSS](https://youtu.be/l-9YQUmTOdI) 

[Help with understand how to create a game quiz using HTML, CSS, JS - JAMES Q QUICK youtube channel](https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=10) 

[How to save to local storage](https://www.youtube.com/watch?v=x0VcigW9kN0) 

[Understanding e target](https://softauthor.com/e-target-in-javascript/)

Specific ode used mentioned throughout 

## Acknowledgements

My wonderful and patient boyfriend for helping me with testing 


