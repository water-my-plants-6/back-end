// const knex = require("knex")
// const knexfile = require("../knexfile")

// module.exports = knex(knexfile)

const knex = require('knex');
const knexConfig = require('../knexfile')
const environment = process.env.NODE_ENV;
module.exports = knex(knexConfig[environment]);
