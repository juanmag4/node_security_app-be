const { Router } = require('express')
const RecordsModel = require('../models/records.model');
const router = Router();

router.get('/:userId', async (req, res) => {
  const result = await RecordsModel.findOne(req.params);
  res.send(result);
});

module.exports = router;
