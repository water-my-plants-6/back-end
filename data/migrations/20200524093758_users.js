exports.up = async function(knex) {
	return knex.schema.createTable("users", (table) => {
		table.increments()
		table.text("username").notNull().unique()
        table.text("password").notNull()
        table.varchar("phoneNumber").notNull()
    })
    
    .createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('name').notNull()
        tbl.integer('recipe_id').notNull()
        .references('id').inTable('recipes')
        tbl.float('quantity')
    })
}

exports.down = async function(knex) {
	return knex.schema.dropTableIfExists("users")
}