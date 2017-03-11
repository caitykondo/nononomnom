const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const food = require('./routes/food');

app.use(express.static('/'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', (req, res) => {
  res.send(req.body);
});

app.use('/food', food);

app.listen( PORT, ()=>{
  console.log('listening on', PORT);
});