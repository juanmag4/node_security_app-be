const { Router } = require('express');
const Feed = require('../models/feed.model')
const router = Router();

router.get('/:userId', async (req, res, next) => {
  const results = await Feed.findOne(req.params);
  return res.send(results);
});

router.post('/', async (req, res) => {
  const result = await Feed.create({ ...req.body });
  return res.send(result);
});

module.exports = router;
