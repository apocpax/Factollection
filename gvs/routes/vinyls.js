const express = require('express');
const router = express.Router();
const vinylsCtrl = require('../controllers/vinyls');


router.get('/new', isLoggedIn, vinylsCtrl.new);
router.post('/', vinylsCtrl.create);
router.get('/', vinylsCtrl.index);
router.get('/:id', vinylsCtrl.show);
router.delete('/:id', isLoggedIn, vinylsCtrl.delete);
router.get('/:id/edit', isLoggedIn, vinylsCtrl.edit);
router.put('/:id', vinylsCtrl.update);
router.get('/:id/review', isLoggedIn, vinylsCtrl.index)
router.post('/facts', isLoggedIn, vinylsCtrl.addFact);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;