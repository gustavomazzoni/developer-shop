# Developer Shop
## Goal

To build an e-commerce application where user can shop for developers, like the example below.
![Imgur](http://i.imgur.com/8NPz67T.png)

## Requirements

* 1) Populate a list of developers from an organization in GitHub.
* 2) Determine the price of the developer using information from his GitHub profile, such as: followers, repos, stars, commits, etc.
* 3) Replace input text by a list of developers with name, photo, price and a button "Add to Cart".
* 4) Improve developer preview in the cart showing more information.
* 5) Allow user to choose the number of hours to contract of each developer.
* 6) Add a button "buy" that takes user to order confirmed page.
* 7) Create pagination to the list of developers.
* 8) Allow adding coupon discount that changes the total price of the order. Use "SHIPIT" code.

## Solution

For the solution, it was built a single page application using [React](https://facebook.github.io/react/), for the client side, consuming a RESTful API, developed in [Node](https://nodejs.org/), that gets and manipulates datas in [MongoDB](https://www.mongodb.org/) database.

When the server side application is started, it loads a list of developers from an organization members in GitHub (current configured to get it from Pinterest organization), determines the price of each developer based on calculation of his GitHub profile information (where number of repos x 1, number of followers x 2, number of stars x 3 and number of forks x 3) and, finally, saves the list of developers in the database.
This boot solution was adopted, because the list of members from an organization in GitHub has a low frequency of updates as well as the profile information from a member. Therefore, with this solution we can save network bandwidth and have a faster API response time.

In the client side, when the React components are loaded a single request to the API is made to load the list of developers and then populate the view components with it. From now on, all operations are handled only in the client side, except when the user clicks Buy. The cart state is saved in the local storage (users browser) until user clicks Buy.
This solution was adopted to have a better user experience and to save the server from unnecessary requests. And saving the cart state in the browser gives the user the opportunity to keep shopping from the place he stoped last time.


Modules required in client side:
* React
* React-DOM
* Babel
* Webpack

Modules required in server side:
* NodeJS
* ExpressJS
* MongoDB
* Mongoose

## Next versions
* Unit test
* Move business logic from React components using [Flux](https://facebook.github.io/flux/docs/overview.html) architecture.
* Add operation to update the list of developers from GitHub to the database.

## Running the app locally
### Install
Install MongoDB
```sh
$ brew install mongodb
```
Run mongo db server
```sh
$ mongod
```
Install project dependencies
```sh
$ npm install
```
### Run
Then build and start the project
```sh
$ npm build
$ npm start
```

Open on your browser:
http://localhost:8080/

## Demo
To see the project running on production (Heroku and MongoDB Labs), go to this link:
http://mazzoni-developer-shop.herokuapp.com/
