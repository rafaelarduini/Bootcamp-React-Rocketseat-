const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World'});
});

app.listen(3332, () =>{
  console.log('🚀️ Back-end started!')
});