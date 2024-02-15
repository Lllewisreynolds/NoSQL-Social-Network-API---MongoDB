# 18 NoSQL: Social Network API

## Description

This application was created to showcase the implementation of specific technologies and methodologies studied as part of our Full-Stack Coding Bootcamp: namely, the MongoDB database and its associated Mongoose ODM, in conjunction with Express.js Routing. This has been dome through the creation of a back-end for a hypothetical Full Stack Social Network Application.

As there is no front-end interface, the business logic of our CRUD operations and their respective API routes are all tested and demonstrated with the Insomina REST Client.

In its totality, the application allows you to create, retrieve individual, update, and delete Users. Said Users can also share their thoughts, create a list of associated friends, provide a reaction to their friends' thoughts, and also if neccessary, delete said thoughts, friends, and reactions. The User themselves can also be deleted. This exercise builds on our prior study of MySQL and its relational database management system, contrasted with the more flexible, JSON-like Collections and Documents that make up MongoDB. Adjusting for the difference between the tabular, strict consistency of MySQL and the scalability and greater ease of use for those more familiar with Object-Orientated Programming that comes with MongoDB forms the core of this assignment, as both approaches carry their own advantages and drawbacks.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
  * [Licence](#licence)
  * [Installation](#installation)
  * [Video Walkthrough](#video-walkthrough)
  * [Questions](#questions)
  
## License

This application has the following licence:

MIT License

[Link to licence](https://opensource.org/licenses/MIT)

## Installation
    
  Follow the following steps to properly install this application:


  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

  * Your next step is to initialize a project by creating a package.json file that will keep track of libraries installed for use in your application by adding the installed package's name and version. This is achieved by typing the following in the command line:

```bash
npm init -y
```

MongoDB must be downloaded and installed also.
You can download the installer directly from the [MongoDB website](https://www.mongodb.com/docs/manual/installation/). 

Proficiency with the MongoDB command line prompt is encouraged, but GUI's such as MongoDB Compass can also be used to provide access to the database.

MongoDB Compass is primarily a graphical user interface application that provides a visual way to interact with your MongoDB databases. 

You can also download this installer directly from the [MongoDB website](https://www.mongodb.com/docs/compass/current/install/). 

This command line application makes use of several dependencies:

  * To install these packages, run the following commands from within the CLI at the root of the application:

```bash
npm i
```

We will then connect our Node.js servers to our MongoDB database to perform queries based on client requests and return responses accordingly.

Prior to starting the server, we need to create our database and its seeded data with the following commands:

Seed database with `npm run seed` as notated in the "scripts" section of the `package.json` file.


  * And finally: 

  Please type the following command within the terminal to invoke the application:

```bash
npm start
```
You can then access the database via the MongoDB Compass visualiser if desired.

Open MongoDB and connect to the MongoDB URI ```mongodb://localhost:27017```. On the list of databases, click on ```socialDB``` to see ```thoughts``` and ```users``` data.


For use of the API routes, the likes of Insomnia application can be utilised to test and demonstrate CRUD functionality. Alternatively, the Thunder Client extension from within VS Code can be used if so preferred. 

For installatiom of the Insomnia REST Client, you can visit the following site [Insomnia website] (https://insomnia.rest/download).

Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install insomnia
```

The video walkthrough below details the endpoints used for our CRUD operations along with the necessary JSON body formats and dynamic URL parameters for each of the database models used where they are required. 

## Video Walkthrough

[Link to video walkthrough of API routes' endpoints / CRUD operations being used with Social Network API Back-End ]()

      
## Questions
      
  For further questions:

  If you have any further questions or feedback at this time regarding the repo or application, my contact info can be found as below.
  
  Contact Info:

  GitHub: [Lllewisreynolds](https://github.com/Lllewisreynolds)

  Email: [lsreynolds108@gmail.com](mailto:lsreynolds108@gmail.com)

