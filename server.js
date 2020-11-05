// Dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Setting up Express
const PORT = process.env.PORT || 3000;
const app = express();

// Setting up Morgan, which is a logger
app.use(morgan("dev"));

// Setting up express app to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));

// Setting up Mongo DB for heroku and localhost
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    useFindAndModify: false
});

// Creating Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts server to begin listening
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`)
});