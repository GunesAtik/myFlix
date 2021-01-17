const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('common'));


let topMovies = [
  {
    title: 'Reconstruction',
    year: '2003',
    director: 'Christoffer Boe'
  },
  {
    title: 'The Great Beauty',
    year: '2013',
    director: 'Paolo Sorrentino'
  },
  {
    title: 'Blue Jasmine',
    year: '2013',
    director: 'Woody Allen'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: movie_api });
});

//Return a list of ALL films
app.get("/movies", (req, res) => {
  res.json(topMovies);
});

// Get a list of all movies
app.get('/movies', (req, res) => {
  res.send('Successful GET request returning data on all movies');
});

// Get data about a single movie by title
app.get('/movies/:title', (req,res) => {
  res.json(topMovies);
});

// Return genre of movie by title
app.get('/movies/genres/:title', (req,res) => {
  res.send('Successful GET request returning data on genre');
});

// Return director of movie by title
app.get('/movies/directors/:title', (req,res) => {
  res.send('Successful GET request returning data on director');
});

// Allow new users to register
app.post('/users', (req,res) => {
  res.send('Successful POST request registering new user');
});

// Allow users to update their user info
app.put('/users/:username', (req,res) => {
  res.send('Successful PUT request updating info for user');
});

// Allow users to add a movie to their list of favourites
app.post('/users/:username/movies/', (req,res) => {
  res.send('Successful POST request adding movie to favorite movie list');
});

// Allow users to remove a movie from their favourites
app.delete('/users/:username/movies/', (req,res) => {
  res.send('Successful DELETE request removing movie from favorite movie list of user');
});

// Allow users to deregister
app.delete('/users/:username', (req,res) => {
  res.send('Successful DELETE request removing user from database');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log("Your myFlix App is on port 8080")
});
