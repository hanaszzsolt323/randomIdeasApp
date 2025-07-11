const express = require('express');
const port = 5000;

const app = express();



app.get('/', (req, res) => { 
  res.json({ message: 'Welcome to the RandomIdeasAPI' })
});


app.listen(port, () => console.log(`Server listening on port: ${port}`));