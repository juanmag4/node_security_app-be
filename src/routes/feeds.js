const { Router } = require('express');
const Feed = require('../models/feed.model');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.get('/', auth, async (req, res) => {
  const results = await Feed.findOne({ userId: req.user.id });
  return res.send(results);
});

router.post('/', auth, async (req, res) => {
  const result = await Feed.create({ ...req.body });
  return res.send(result);
});

module.exports = router;
