This is the back-end for the Water My Plants app.

Heroku (root) link
WELCOME
https://water-my-plants-bwpt12.herokuapp.com/


Register Users 
http://localhost:5000/auth/register

    EXAMPLE
	username: "lambda" (required)
	password: "student" (required)
	phoneNumber: "777-777-7777" (required)

User Login
http://localhost:5000/auth/login

    EXAMPLE
    username: "lambda" (required)
	password: "student" (required)

PLANTS
http://localhost:5000/plants

Able to GET/POST/PUT/DELETE

    EXAMPLE
    nickname: "Rosey2" (required)
    species: "rose" (required)
    h2oFrequency: "daily" (required)
    user_id: 1
