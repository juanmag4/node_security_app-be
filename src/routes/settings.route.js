const { Router } = require('express');
const Settings = require('../models/settings.model');
const auth = require('../middleware/auth.middleware');
const router = Router();

router.get('/', auth, async (req, res) => {
  const results = await Settings.findOne({ userId: req.user.id });
  return res.send(results);
});

router.post('/', auth, async (req, res) => {
  const { videoQuality } = req.body;
  const result = await Settings.updateOne({ userId: req.user.id }, { videoQuality });
  return res.send(result);
});

module.exports = router;
