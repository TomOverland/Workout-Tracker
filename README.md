# Workout-Tracker

[Deployed on Heroku](https://agile-anchorage-58361.herokuapp.com/).

![Screenshot of Application](https://github.com/TomOverland/Workout-Tracker/blob/main/public/assets/Last-Workout.JPG)

## Description:

This application demonstrates a simple full stack development CRUD application with front end implemented with an HTML/CSS and Semantic UI.  The backend is implemented with Node.js and Express. The database was constructed with MongoDB and Mongoose and implemented to Heroku with Mongo Atlas.

The app allows a user to track their daily workouts. The app allows the user to log multiple exercises in a workout on a given day. The user is able to enter the name of the exercise, the type of exercise (resistance or cardio), the weight, sets, reps, and duration of the exercise. If the exercise is a cardio workout, then the user is able to track the distance traveled as well. Submitting a workout enters the exercise's information into the Mongo database. If the user wants to track multiple workouts throughout the day, they can "continue workout" to add additional exercises to that day's workout.  
  
The user can then view the analytics of their workouts on the stats page, which consists of four graphs from Charts.js.

![Screenshot of Application](https://github.com/TomOverland/Workout-Tracker/blob/main/public/assets/Add-New-Exercise.JPG)

![Screenshot of Application](https://github.com/TomOverland/Workout-Tracker/blob/main/public/assets/Analytics.JPG)


## Installation:

#### Step 1 - Make sure you have a code editor, MySQL, Node.js and Node Package Manager installed

The code editor I used was Visual Studio Code. It can be found [here](https://code.visualstudio.com/download).  
Node.js and NPM download can be found [here](https://nodejs.org/en/).  
MongoDB can be found [here](https://www.mongodb.com/try/download/community).

#### Step 2 - Clone my repository

In your command terminal, type the following to clone this repository: "git clone https://github.com/TomOverland/Workout-Tracker.git"

#### Step 3 - Move to the correct directory

Type the following in your command line: "cd Workout-Tracker"

#### Step 4 - Install NPM dependencies

By typing "npm install -i" you will download all of the dependencies required for this application.

#### Step 5 - Start the application on your local server

Type the following in your command line: "node server.js" and then go to the url "localhost:3000" in your internet browser.  
There is included seed information for example workouts, just type "node seeders/seed.js" into your command line.

## Technology used
* Node.js
* Heroku-cli NPM Package
* Express NPM Package
* Express-Handlebars NPM Package
* MongoDB
* Mongoose NPM Package
* MongoDB Atlas
* HTML 5
* CSS 3
* Semantic UI
* JavaScript
* Path NPM Package
* Morgan NPM Package

## Built With
* VS Code - https://code.visualstudio.com/
* MongoDB - https://www.mongodb.com/try/download/community

## License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

For more information about the license, click the link below:

- [License](https://opensource.org/licenses/)

## Contributing:

Everyone is welcome to contribute. Create a pull request with your changes and I will review it. Currently, I only have instructions written in English. Translations to other languages would be appreciated!

## Tests:

This application was not developed with any tests.

## Demonstration

- [YouTube](https://youtu.be/2QJjeok9mIU)

## Questions:

For more information about the application, please reach out to me via my [GitHub Profile](https://github.com/TomOverland).

For any other questions, please send me an email at: thomas.c.overland@gmail.com.
