const express = require('express');

const app = express();

app.get("/courses", (request, response) => {
    return response.json(["Curso Port", "Curso Ing", "Curso Esp"]);
});

app.post("/courses", (request, response) => {
    return response.json(["Curso Port", "Curso Ing", "Curso Esp", "Curso Alem"]);
});

app.put("/courses/:id", (request, response) => {
    const params = request.params
    console.log(params)
    return response.json(["Curso Russo", "Curso Ing", "Curso Esp", "Curso Alem"]);
});

app.patch("/courses/:id", (request, response) => {
    const params = request.params
    console.log(params)
    return response.json(["Curso Mandarim", "Curso Alem", "Curso Koreano"]);
});

app.delete("/courses/:id", (request, response) => {
    const params = request.params
    console.log(params)
    return response.json(["Curso Russo", "Curso Ing", "Curso Alem"]);
});

app.listen(3333)