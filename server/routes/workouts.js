import express from 'express'

import exerciseRouter from './exercise.js'
import { getWorkouts, getWorkoutByID, postWorkout, updateWorkout, deleteWorkout, saveWorkout, unsaveWorkout } from '../controllers/workouts.js'

const router = express.Router({mergeParams: true})

router.use('/:wid/exercises', exerciseRouter)
router.get('/', getWorkouts)
router.get('/:_id', getWorkoutByID)
router.post('/', postWorkout)
router.put('/:_id', updateWorkout)
router.delete('/:_id', deleteWorkout)
router.patch('/:_id/save', saveWorkout)
router.patch('/:_id/unsave', unsaveWorkout)

export default router