const request = require("supertest");
const server = require("../index");
const db = require("../data/config");

describe("auth-router", function () {
    
  describe("post /login", function () {
      beforeEach(async () => {
        await db("users").truncate(); 
      });
     
      it("return 500  on error", async function () {
        await request(server)
          .post("/auth/login")
          .send({ name: "newUser" })
          .then(res => {
            expect(res.status).toBe(500);
          });
  
      });
  
    //   it('should return a message saying "user registered"', function () {
    //     return request(server)
    //       .post("/api/auth/register")
    //       .send( {username: "newuser1", password: "newpass"} )
    //       .then(res => {
    //         expect(res.body.message).toBe('user registered!');
    //       });
    //   }); 
     

});
//   describe('post /login', function() {
//     it("return 401  on unsuccessful login", function () {
//         return request(server)
//           .post("/api/auth/login")
//           .send({ username: "angela2"  })
//           .then(res => {
//             expect(res.status).toBe(401);
//           });
//       });  
//       it('should return 200 on login', function () {
//         return request(server)
//           .post("/api/auth/login")
//           .send( {username: "newuser1", password: 'newpass'} )
//           .then(res => {
//             expect(res.status).toBe(200);
//           });
//       }); 
// })
})