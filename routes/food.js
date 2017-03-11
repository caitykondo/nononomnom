const express = require('express');
const fs = require('fs');
let router = express.Router();

router.route('/')
  .get((req, res) => {
    // pass in req.body.food req.body.diet
    // check if req.body.diet exists
    // return yes if found, no if not found
    fs.readFile('./food.json', 'utf8', (err, data)=>{
      if (err) throw err;
      console.log(data);


    });
  });

module.exports = router;