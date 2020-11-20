var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');
const skill = require('../models/skill');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);

module.exports = router;