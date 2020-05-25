// module.exports = {
// 	client: "sqlite3",
// 	useNullAsDefault: true,
// 	connection: {
// 		filename: "./data/auth.db3",
// 	},
// 	migrations: {
// 		directory: "./data/migrations",
// 	},
// 	seeds: {
// 		directory: "./data/seeds",
// 	},
// 	pool: {
// 		afterCreate: (conn, done) => {
// 			conn.run("PRAGMA foreign_keys = ON", done)
// 		},
// 	},
// }

require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/auth.db3' },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: { directory: './data/seeds' },
  },
  production: {
    client: "sqlite3",
    connection: { filename: "./data/auth.db3", },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: { directory: "./data/migrations", },
    seeds: { directory: "./data/seeds", },
  }
};
