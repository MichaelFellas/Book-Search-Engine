# Michael Ariti - Book Search Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

| Table of Contents                               |
| ----------------------------------------------- |
| [1. Description.](#description)                 |
| [2. User Story.](#user-story)                   |
| [3. Acceptance Criteria.](#acceptance-criteria) |
| [4. Installation.](#installation)               |
| [5. Usage.](#usage)                             |
| [6. License.](#license)                         |
| [7. Contributing.](#contributing)               |
| [8. Technologies Used.](#technologies-used)     |
| [9. Screenshots.](#screenshots)                 |
| [10. Deployed App.](#deployed-app)              |
| [11. Questions.](#questions)                    |

## Description

The purpose of this repository is to convert a functioning RESTful application into one that used graphql and APOLLOdb.

### Features

```md
The ability to create a user.
The ability to search book by title
The ability to save books to your profile
The ability to browse your saved books
The ability to delete saved books
```

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Installation

To install this app you are required to have MondoDB set up and configured. Open the root package.json file in a node terminal and use the command `npm install` to install the dependencies. Run `npm start dev` to begin the app. Navigate to `localhost://3000` to begin.

## Usage

Navigate to the deployed app link on heroku and sign up.

## License

This project uses the MIT license.

## Contributing

If you would like to contribute to the project please message my github.

## Technologies Used

1. Javascript
2. Node.js
3. MongoDB
4. graphql
5. React
6. Apollodb
7. Express
8. Bcyrpt

## Screenshots

![App-Screenshot](./assets/createUser.png)
![App-Screenshot](./assets/createThought.png)
![App-Screenshot](./assets/getUsers.png)

## Deployed App

[URL](https://book-search-mickey.herokuapp.com/)

## Questions

If you have Questions or tips please email me at the address below.

### Email

MichaelAriti94@gmail.com

### End

Michael Ariti 2022
