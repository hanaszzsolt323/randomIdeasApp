const express = require('express');
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'I dont really understand any of this but whatever',
    tag: 'Technology',
    username: 'YourMom12',
    date: '2032-13-12'
  },
  {
    id: 2,
    text: 'Flying without wings or anything should be possible',
    tag: 'Invention',
    username: 'FlyFar1223',
    date: '2123-23-23'
  },
  {
    id: 3,
    text: 'Great idea, we should try it right now',
    tag: 'Infamous Last Words',
    username: 'JustDoIt23',
    date: '2028-12-12'
  }
]

app.get('/', (req, res) => { 
  res.json({ message: 'Welcome to the RandomIdeasAPI' })
});
// Get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas })
})

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find(idea => idea.id === +req.params.id)

  if(!idea) {
    return res.status(404).json({success: false, error: 'Resource not found'})
  }

  res.json({ success: true, data: idea })
})

app.listen(port, () => console.log(`Server listening on port: ${port}`));