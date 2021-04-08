const express = require("express");
const app = express();
const mongoose = require("mongoose");

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo is a gogo"))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send("This works!"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is serving on port ${port}`));
