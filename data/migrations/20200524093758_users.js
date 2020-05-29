exports.up = function(knex) {
	return knex.schema.createTable("users", tbl => {
		tbl.increments()
		tbl.string("username").notNullable().unique()
        tbl.string("password").notNullable()
        tbl.string("phoneNumber").notNullable()
    })
    
    .createTable('plants', tbl => {
        tbl.increments('id');
        tbl.string('nickname').notNullable()
        tbl.string('species').notNullable()
        tbl.string('h2oFrequency').notNullable()
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
}

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
}
