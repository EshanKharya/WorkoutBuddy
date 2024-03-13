import mongoose from 'mongoose'

const workoutSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    creatorName: {
        type: String,
        required: true
    },
    exercises: {
        type: [{name: String, weights: Number, reps: Number, duration: Number, durationUnit: String, target: String, info: String}],
        required: true
    },
    savedBy: {
        type: Number,
        default: 0
    },
    duration: {
        type: Number,
        default: 0
    },
    goal: {
        type: String,
        required: true
    }
})

export const WorkoutModel = mongoose.model("Workout Model", workoutSchema)