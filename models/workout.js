const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        excercises: [
                {
                    type: {
                        type: String,
                        trim: true,
                        required: "Enter an exercise type"
                    },
                    name: {
                        type: String,
                        trim: true,
                        required: "Enter an excercise name"
                    },
                    duration: {
                        type: Number,
                        required: "Enter an exercise duration in minutes"
                    },
                    weight: {
                        type: Number
                    },
                    reps: {
                        type: Number
                    },
                    sets: {
                        type: Number
                    },
                    distance: {
                        type: Number
                    }
                }
            ]
        },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// Implement a Schema virtual to obtain the total duration of exercise
workoutSchema.virtual("totalDuration").get(function() {
    // reduce array of exercises down to the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;