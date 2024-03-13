import mongoose from "mongoose";
import { WorkoutModel } from "../models/workoutModel.js";

const isValidID = _id => (mongoose.Types.ObjectId.isValid(_id))

const isValidExercise = (exercise) => {
    if(!exercise.name || !exercise.target || !exercise.info){
        return false
    } else if (!exercise.reps && !exercise.duration) {
        return false
    } else if(exercise.duration && !exercise.durationUnit) {
        return false
    }

    return true
}

export const postExercise = async (req, res) => {
    try {
        const {wid} = req.params
        if(!isValidID(wid)) {
            return res.status(404).send("Workout not found!")
        }
        const newExercise = req.body
        if(!isValidExercise(newExercise)) {
            return res.status(404).send("Missing Key Parameters!")
        }
        let workout = await WorkoutModel.findById(wid)
        workout.exercises.push(newExercise)
        await workout.save()

        res.status(200).json({message: "Added Exercise!", newExercise})
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

export const updateExercise = async (req, res) => {
    try {
        const {wid, eid} = req.params
        if(!isValidID(wid)) {
            return res.status(404).send("Workout not found!")
        }
        if(!isValidID(eid)) {
            return res.status(404).send("Exercise not found!")
        }
        const newExercise = req.body
        if(!isValidExercise(newExercise)) {
            return res.status(404).send("Missing Key Parameters!")
        }
        let workout = await WorkoutModel.findById(wid)
        let exerciseToUpdate = workout.exercises.id(eid)
        
        exerciseToUpdate.name = newExercise.name || exerciseToUpdate.name;
        exerciseToUpdate.weights = newExercise.weights || exerciseToUpdate.weights;
        exerciseToUpdate.reps = newExercise.reps || exerciseToUpdate.reps;
        exerciseToUpdate.duration = newExercise.duration || exerciseToUpdate.duration;
        exerciseToUpdate.durationUnit = newExercise.durationUnit || exerciseToUpdate.durationUnit;
        exerciseToUpdate.target = newExercise.target || exerciseToUpdate.target;
        exerciseToUpdate.info = newExercise.info || exerciseToUpdate.info;

        workout.save()

        res.status(200).json({message: "Updated Exercise!", exerciseToUpdate})
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

export const deleteExercise = async (req, res) => {
    try {
        const { wid, eid } = req.params;

        if (!isValidID(wid)) {
            return res.status(404).send("Workout not found!");
        }
        if (!isValidID(eid)) {
            return res.status(404).send("Exercise not found!");
        }

        let workout = await WorkoutModel.findById(wid);

        if (!workout) {
            return res.status(404).send("Workout not found!");
        }
        const exerciseIndex = workout.exercises.findIndex((exercise) => exercise._id == eid);

        if (exerciseIndex === -1) {
            return res.status(404).send("Exercise not found!");
        }
        workout.exercises.splice(exerciseIndex, 1);

        await workout.save();

        res.status(200).json({ message: "Deleted Exercise!", workout });
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};
