import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.ts";

const router = express.Router()

router.post('/register', (req: Request, res: Response) => {

})

router.post('login', (req: Request, res: Response) => {

})


export default router