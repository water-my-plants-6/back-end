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
  
      it('should return 401 on login', async function () {
        await request(server)
          .post("/auth/login")
          .send( {username: "newuser1", password: 'newpass'} )
          .then(res => {
            expect(res.status).toBe(401);
          });
      }); 
     

});

describe("post /register", function () {
  beforeEach(async () => {
    await db("users").truncate(); 
  });
 
  it("return 404  on error", function () {
    return request(server)
      .post("/register")
      .send({ username: "newuser" })
      .then(res => {
        expect(res.status).toBe(404);
      });
  });

  // it('should return a message saying "user registered"', function () {
  //   return request(server)
  //     .post("/auth/register")
  //     .send( {username: "newuser1", password: "newpass", phoneNumber: "777-777-7777"} )
  //     .then(res => {
  //       expect(res.body.message).toBe("Welcome!");
  //     });
  // }); 
 

});

})