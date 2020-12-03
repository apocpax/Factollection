const Vinyl = require('../models/vinyl');

module.exports = {
    new: newVinyl,
    create,
    index,
    show,
    delete: deleteVinyl,
    edit,
    update,
    addFact


};

function addFact(req, res, next) {
    req.user.facts.push(req.body);
    req.user.save(function(err) {
        res.redirect('/facts');
    });
}

function update(req, res) {
    req.body.done = !!req.body.done;
    Vinyl.findByIdAndUpdate(req.params.id, req.body,
        function(err, updatevinyl) {
            if (err) console.log(err)

            res.redirect('/vinyls')
        });
}

function edit(req, res) {
    const vinyl = Vinyl.findById(req.params.id,
        function(err, vinyl) {
            res.render('vinyls/edit', { vinyl });
        });

}

function deleteVinyl(req, res) {
    Vinyl.findByIdAndDelete(req.params.id,
        function(err, deleteVinyl) {
            res.redirect('/vinyls');
        });
}



function index(req, res) {

    Vinyl.find({},
        function(err, allVinyls) {
            res.render('vinyls/index', {
                vinyls: allVinyls
            })
        })
}

function show(req, res) {
    Vinyl.findById(req.params.id, function(err, vinyl) {
        res.render('vinyls/show', { title: 'Vinyl Detail', vinyl });
    });
}

function newVinyl(req, res) {

    res.render('vinyls/new')
};

function create(req, res) {
    const vinyl = new Vinyl(req.body);
    vinyl.save(function(err) {
        if (err) return res.render('vinyls/new');
        console.log(vinyl);
        res.redirect('/vinyls');
    });
}