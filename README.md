# MakersBnB
## First Makers Academy group project.

Simple posting web app built as a lite version of AirBnB. The app was built as the first group project during the Makers Academy coding bootcamp.

### Team members: [Isabel Larner](https://github.com/ilarne), [Sulaiman Ahmadshah](https://github.com/sulaimancode), [Henry Hobhouse](https://github.com/henryhobhouse), [Unai Motriko Gomez](https://github.com/motri)

## Quick start

The app is web based but as using Angular (2.0) it needs to have two servers running using CORS as middleware to connect the two.

* Ensure MongoDB is installed with the service running.
* Clone the github repo to your local machine
* Ensure that NodeJS (6 or above) is installed
* Run 'npm install' followed by 'npm start' at the root of the app from the command line to start the main server and connection the Mongo Database
* Visit the angular folder "angular-src" and additionally run 'npm install' followed by 'npm start' to start the Angular service.
* Open your browser to http://localhost:4200

### User Stories
```
As a user,
So I can have an account,
I would like to sign up.

As a member,
so I can add a listing,
I would like to sign in.

As a member,
so I can add a listing,
I need to be able to add details of listing.
```

## Tests

There are two seperate testing packages and locations. The first from the root of the app which uses Mocha to test the models. The second is from the Angular-src folder that uses Karma with Jasmine to test the user interface. Each can be be run using the 'npm test' from the the command line from within the perspective folders. Note the app was built using TDD methodology so the single failing test is due to functionality yet to be built due to the project week stoping deveopment. 
