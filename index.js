const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(morgan('common'));


let topBooks = [
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling'
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'Twilight',
    author: 'Stephanie Meyer'
  }
];

// GET requests
app.get('/movies', (req, res) => {
  res.json(top10movies);
});

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: movie_api });
});

app.use(express.static('public'));


// listen for requests
app.listen(8080, () =>
  console.log('Your app is listening on port 8080.')
);
