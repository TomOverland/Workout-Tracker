const db = require("../models");

module.exports = function(app) {

    // Used by api.js to getLastWorkout()
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // Used by api.js to getWorkoutsInRange()
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
    
    // Creates a new workout in the workout database, createExercise() in api.js
    app.post("/api/workouts", async (req, res)=> {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(response);
        }
        catch(err){
            console.log("Error: ", err);
        }
    })

    // Used by api.js to addExercise() to a workout
    app.put("/api/workouts/:id", ({body, params}, res) => {
        const workoutId = params.id;
        let savedExercises = [];

        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc){
                if(err){
                    console.log(err);
                }
            })
        }

        db.Workout.find({_id: workoutId}).then(dbWorkout => {
            savedExercises = dbWorkout[0].exercises;
            res.json(dbWorkout[0].exercises);
            let allExercises = [...savedExercises, body]
            updateWorkout(allExercises)
        })
            
    })
};