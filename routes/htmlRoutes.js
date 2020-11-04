const path = require("path");

module.exports = function(app) {
    // Displays landing page, where you can start or complete a workout.
    // The last workout will be displayed per index.js
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public.index.html"));
    })

    // Displays add your exercise page
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Displays the analytics page
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};