const Vinyl = require('../models/vinyl');

module.exports = {
    create,
    index,
    show,
    addFact
};

function addFact(req, res, next) {
    req.user.facts.push(req.body);
    req.user.save(function(err) {
        res.redirect('/facts');
    });
}

function create(req, res) {
    Vinyl.findById(req.params.id, function(err, vinyl) {
        vinyl.reviews.push(req.body);
        vinyl.save(function(err) {
            res.redirect(`/vinyls/${vinyl._id}`);
        });
    });
}

function index(req, res) {

    Vinyl.find({},
        function(err, allReviews) {
            res.render('vinyls/index', {
                vinyls: allReviews
            })
        })
}

function show(req, res) {
    Vinyl.findById(req.params.id, function(err, review) {
        res.render('vinyls/show', { title: 'Vinyl Detail', review });
    });
}