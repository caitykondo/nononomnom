const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const food = require('./routes/food');

app.use(express.static('/'));

app.use('/food', food);


app.listen( PORT, ()=>{
  console.log('listening on', PORT);
});