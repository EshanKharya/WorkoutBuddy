import express from 'express'

import { postExercise, updateExercise, deleteExercise } from '../controllers/exercise.js'
const router = express.Router({mergeParams: true})

router.post('/', postExercise)
router.put('/:eid', updateExercise)
router.delete('/:eid', deleteExercise)

export default router