const db = require('../data/config');

module.exports = {
    getResources,
    getByID,
    add,
    remove
}

function getResources() {
    return db('plants')
}

function getByID(id) {
    return db('plants').where({id}).first()
}

function add(newTask) {
    return db('plants').insert(newTask)
}

function remove(id) {
    return db('plants').where({ id }).del()
}