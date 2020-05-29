// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('plants').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('plants').insert([
//         {user_Id: 1, nickname: 'Rosey', species: 'rose', h2oFrequency: 'daily'},
//       ]);
//     });
// };


exports.seed = function(knex) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('plants').insert([
        {nickname: 'Rosey', species: 'rose', h2oFrequency: 'daily', user_Id: 1 },
      ]);

};
