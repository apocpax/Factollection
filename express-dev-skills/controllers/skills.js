var skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newskill,
    create,
    delete: deleteskill
};

function create(req, res) {
    console.log('Hitting the create route!')
    console.log(req.body, "<---------------- req.body");

    skill.create(req.body)
    res.redirect('/skills')
}

function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll(),
        time: req.time
    });
}


function show(req, res) {
    res.render('skills/show', {
        skill: skill.getOne(req.params.id),
        // Would like to display the number of the todo within the list
        skillNum: skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
    });
}

function newskill(req, res) {
    res.render('skills/new');
}

function newskill(req, res) {
    res.render('skills/new')
};

function deleteskill(req, res) {
    skills.deleteOne(req.params.id);
    res.redirect('/skills');
}