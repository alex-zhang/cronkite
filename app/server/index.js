'use strict'

const express = require('express');

let app = express();

app.listen(3000, ()=> {
  console.log('app listening on port 3000!');
});