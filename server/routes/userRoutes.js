const router = require('express').Router();
const { User } = require('../models'); 


router.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  router.get('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
        .populate('thoughts')
        .populate('friends');
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
  
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post('/api/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;
























module.exports = router;
