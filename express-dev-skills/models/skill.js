const skills = [
    { id: 1, skill: 'coding' },
    { id: 2, skill: 'games' },
    { id: 3, skill: 'funny' }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function create(skill) {

    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function getAll() {
    return skills;
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(t => t.id === id);
    skills.splice(idx, 1);
}