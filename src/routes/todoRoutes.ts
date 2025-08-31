import express from "express";
import db from "../db.ts";

const router = express.Router()

// get all todos for logged-in user
router.get('/', (req: Request, res: Response) => {

})

// create a new todo
router.post('/', (req: Request, res: Response) => {

})

// modificating a todo
router.put('/:id', (req: Request, res: Response) => {

})

// delete todo
router.delete('/:id', (req: Request, res: Response) => {

})

export default router