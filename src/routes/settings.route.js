const { Router } = require('express');
const Settings = require('../models/settings.model')
const router = Router();

router.get('/:userId', async (req, res) => {
  const results = await Settings.findOne(req.params);
  return res.send(results);
});

router.post('/', async (req, res) => {
  const { user, videoQuality } = req.body;
  const result = await Settings.updateOne({ user }, { videoQuality });
  return res.send(result);
});

module.exports = router;
