// Importing required modules
import cors from 'cors';
import express from 'express';
import path from 'path'
import { Query } from "@codemix/ts-sql";

// parse env variables
require('dotenv').config();

// Configuring port
// const port = process.env.PORT || 9000;
const port = process.env.PORT || 3000;

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.set('view engine', 'html');

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
// app.use('/api', require('./routes/api'));

app.get('/', (__req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

app.post('/api/sql', (req, res) => {
  let { people: AllSimpsons, places: AllPlaces } = req.body

  const simpsons = {
    people: AllSimpsons, places: AllPlaces
  }

  
  type AllSimpsons = Query<"SELECT * WHERE FROM people",
  typeof simpsons>;
  
  type AllPlaces = Query<"SELECT * WHERE FROM places",
    typeof simpsons>;

  
console.log(AllSimpsons)
console.log(AllPlaces)
  
res.send(AllSimpsons)
})

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api`);

module.exports = app;
