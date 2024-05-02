const express = require("express");
const app = express();

const PORT = 5555;
const registered_users = {
}
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
    const uuid = request.body.uuid;
    registered_users[uuid] = request.ip;
    response.json({
        ip: request.ip,
        ips: request.ips,
        origin: request.ip,
        registered_users: registered_users
    });
});

app.get("/about", (request, response) => {
    response.send("<h1>About</h1>");
});

app.listen(PORT, () => {
    console.log(`Listen on the port ${PORT}...`);
});