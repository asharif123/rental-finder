# Rental Finder

## Demo
![This is a video](/public/images/videodemo.gif)
## Description
This project serves to explore available rental properties across the United States. As some companies adopt a work from home policy, many people have used this opportunity to move to other cities. Our project facilitates this search. 

Our motivation was to challenge ourselves by improving on the idea of our first project, by building the front and back end to produce full application our users can interact with. 

We built a functioning, useful, and fully deployed application. The purpose of creating Rental Finders is to produce an application for users who are looking for a new home. Inspired by the California exodus, we thought of an easy to use property search website. We believe this would be useful for this current trend . The easy to navigate platform and asthetically pleasing user interface will entice the user to engage with this application for their future home search. 

- What problem does it solve?

By building the back end of our application we were able to retreive listing data and create/store our user data to create authentication. 

- What did you learn?

We learned how to utilize Express.js to handle different methods in an API routes. This allowed us to handle reponses that the client requests .  With Express.js we handled our GET and POST request.
we also learned how to implement SQL for our database and seed the database. In addition creating and seeding the database, we used Sequelize to communicate with mySQL.
Another subject we learned and implemented was Model-View-Controller. We structured our codebase in three different sections, exercising the philsophy known as seperation of concerns. In the Model we structured our database and logic for data retrieval . In Model is where we implemented Sequelize (ORM) for database queries.  In the View, we dynamically generated HTML using Handlebar.js templete engine. Finally, in Controller we seperated the client-side and the server-side routes . The Controller handler user input and interacts with Model to Create, Read, Update, and Delete (CRUD)

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
The project was uploaded to GitHub at the following repository:  https://github.com/asharif123/rental-finder

You can access the deployed application with the Heroku link: https://rental-finders.herokuapp.com

To install the project follow these steps:

Clone the application from GitHub with:

git clone [clone link from GitHub]

From the root folder, install the dependencies with:

npm install

Run the app with:

npm test

After the installation is complete. 

Create database. This step can be done in your terminal or using a GUI. In this example the Schema is created via Sequel Pro 
![This is a video](/public/images/run_schema.gif)

After the database is create run NPM test in your terminal
![This is a video](/public/images/P2Terminal.gif)
## Usage

This is the Homepage. If The user exisit they will have the option to login in or if they are a new user they will have the option to sign up
![This is a video](/public/images/homepage.gif)

Once the user is logged in they can begin their search using City, State, and a budget range from minimum to maximum 
![This is an image](/public/images/searchpage.png)

When the user selects search they will be directed to their results
![This is an image](/public/images/resultspage.png)

The user results will be displayed and the user will have the option to view photos of the properties. 
![This is a video](/public/images/viewresults.png)
 ## Credits
Developers:

Delmy Elias https://github.com/Dlelias
 
Mason Newell https://github.com/MasonNewell

Awad Sharif https://github.com/asharif123

Braulio Mora https://github.com/BraulioCP59

Copyright (c) 2021 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
