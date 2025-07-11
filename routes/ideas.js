const express = require('express');
const router = express.Router();


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

// Get all ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas })
})
// Get single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find(idea => idea.id === +req.params.id)

  if(!idea) {
    return res.status(404).json({success: false, error: 'Resource not found'})
  }

  res.json({ success: true, data: idea })
})

// Add an idea
router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10)
  }
  ideas.push(idea)

  res.json({ success: true, data: idea })
})

// Update idea
router.put('/:id', (req, res) => {
  const idea = ideas.find(idea => idea.id === +req.params.id)

  if(!idea) {
    return res  
      .status(404)
      .json({ success: false, error: 'Resource not found' })
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea })
})

// Delete idea
router.delete('/:id', (req, res) => {
  const idea = ideas.find(idea => idea.id === +req.params.id)

  if(!idea) {
    return res  
      .status(404)
      .json({ success: false, error: 'Resource not found' })
  }

  const index = ideas.indexOf(idea)

  ideas.splice(index, 1)
  
  res.json({ success: true, data: {} })
})



module.exports = router;