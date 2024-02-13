const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;
const testRoute = require("./routers/testingRoutes")

app.use("/test",testRoute);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
