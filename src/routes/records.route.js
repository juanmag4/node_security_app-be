const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const RecordsModel = require('../models/records.model');
const router = Router();

router.get('/', auth, async (req, res) => {
  const result = await RecordsModel.findOne({ userId: req.user.id });
  res.send(result);
});

module.exports = router;
