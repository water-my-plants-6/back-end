// // const knex = require("knex")
// // const knexfile = require("../knexfile")

// // module.exports = knex(knexfile)


// require('dotenv').config();
// const knex = require('knex');


// // const knexConfig = require('../knexfile')



// const environment = process.env.NODE_ENV || "development";
// const knexConfig = require('../knexfile.js')[environment];
// module.exports = knex(knexConfig);



// // module.exports = knex(knexConfig.development);



const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);
