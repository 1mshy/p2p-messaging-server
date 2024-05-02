const express = require("express");
const app = express();

const PORT = 5555;
const registered_users = new Set();
app.use(express.json());

app.get("/ip", (request, response) => {
    // response.send("Hi there");
    console.log(request.baseUrl);
    response.json({
        ip: request.ip,
        ips: request.ips,
        origin: request.ip
    });
});
/**
 * Register a new user
 * @param {string} uuid - The user uuid
* */
app.post("/register", (request, response) => {
    // response.send("Hi there");
    console.log(request.body);
    const uuid = request.body.uuid;
    const ip = request.ip;
    console.log(`registering ${uuid} with ip ${ip}`);
    registered_users.add({uuid: ip});
    response.json({
        registered_users: Array.from(registered_users)
    });
});

app.get("/about", (request, response) => {
    response.send("<h1>About</h1>");
});

app.listen(PORT, () => {
    console.log(`Listen on the port ${PORT}...`);
});
