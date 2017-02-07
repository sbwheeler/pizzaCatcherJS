# pizzaCatcherJS

pizzaCatcherJS is a color detecting webcam game that allows people to interact with their computers and catch pizza thrown to them by our good friend Ming (it's an inside joke). It was built using Node, jQuery and a motion/color detecting library called tracking.js. It was made as a project for a hacakthon at Fullstack Acadmey. The game is deployed and viewable at http://pizzacatcherjs.herokuapp.com.

## Getting Started

Follow these steps to get the game running on your machine

### Prerequisites

This guide assumes that you have Node (and npm) installed. If you don't, you can get it here: https://nodejs.org.

### Installing

Setup is easy, in the project directory run

```
npm install
```

then, to start the server run

```
npm start
```

and connect to localhost:8080

You will need a pink sticker like the one located below (or a pink post-it note). This is what you will be catching the pizza with!

![alt text](https://github.com/sbwheeler/pizzaCatcherJS/blob/master/images/examplePink.jpeg)

## Running the tests

Our test suite features testing for the routing and frontend. On the frontend, we test our jQuery for expected behavior, and also test specific actions of out libraries and modules. All tests are run via

```
npm test
```

## Deployment

pizzaCatcherJS is deployed on Heroku with minimal additional configuration. The .profile file and install scripts are written to handle deployment.

## Authors

* **Anuj Shah** - [GitHub](https://github.com/anujshah108)
* **Sam Wheeler** - [GitHub](https://github.com/sbwheeler)
