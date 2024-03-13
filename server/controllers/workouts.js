import mongoose from "mongoose";
import { WorkoutModel } from "../models/workoutModel.js";

const isValidID = (_id) => mongoose.Types.ObjectId.isValid(_id);

const isValidWorkout = (workout) => {
  if (
    !workout.name ||
    !workout.creatorName ||
    !workout.exercises ||
    !workout.goal ||
    !workout.duration
  ) {
    return false;
  }
  return true;
};

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutModel.find();
    res.status(200).json({ count: workouts.length, workouts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getWorkoutByID = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!isValidID(_id)) {
      return res.status(404).send("Workout not found!");
    }

    const workout = await WorkoutModel.findById(_id);

    if (!workout) {
      return res.status(404).send("Workout not found!");
    }

    res.status(200).json(workout);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const postWorkout = async (req, res) => {
  try {
    if (!isValidWorkout(req.body)) {
      res.status(404).send({ message: "Missing required fields!" });
    }

    const newWorkout = await WorkoutModel.create(req.body);
    res.status(201).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateWorkout = async (req, res) => {
  try {
    const { _id } = req.params;

    if (!isValidID(_id)) {
      return res.status(404).send("Workout not found!");
    }

    if (!isValidWorkout(req.body)) {
      res.status(404).send({ message: "Missing required fields!" });
    }

    const updatedWorkout = await WorkoutModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).json({ updatedWorkout });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteWorkout = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!isValidID(_id)) {
      return res.status(404).send("Workout not found!");
    }

    const deletedWorkout = await WorkoutModel.findByIdAndDelete(_id);
    res.status(201).send("Workout Deleted!");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const saveWorkout = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!isValidID(_id)) {
      return res.status(404).send("Workout not found!");
    }
    const workout = await WorkoutModel.findById(_id);
    workout.savedBy += 1;
    await workout.save();

    res.status(201).send("Saved!");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const unsaveWorkout = async (req, res) => {
  try {
    const { _id } = req.params;
    if (!isValidID(_id)) {
      return res.status(404).send("Workout not found!");
    }
    const workout = await WorkoutModel.findById(_id);
    workout.savedBy -= 1;
    await workout.save();
    res.status(201).send("Unsaved!");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
