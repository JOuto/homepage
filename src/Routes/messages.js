const express = require('express');
const router = express.Router();
const Message = require('../Models/Message');



router.post('/', async (_req, res) => {
  const message = new Message({
    message: _req.body.message,
  });
  const response = await message.save();
  res.send(response);
});
router.get('/', async (_req, res) => {
  const messages = await Message.find({});
  res.send(messages);
});

module.exports = router;
