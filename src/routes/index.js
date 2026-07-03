const express = require('express');
const router = express.Router();
const { html } = require('../models/index');
router.get('/', (req, res) => {
  res.send(`<!DOCTYPE html><html><head><title>${html.title}</title></head><body>${html.body}</body></html>`);
});
module.exports = router;