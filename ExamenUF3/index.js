const express = require('express');

const bodyParser = require('body-parser');
const artworks= require("https://api.artic.edu/api/v1/artworks");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("https://api.artic.edu/api/v1/artworks", artworks);


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);

});