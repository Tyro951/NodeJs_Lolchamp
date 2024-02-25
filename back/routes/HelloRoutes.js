import express from "express"
import { getHello, getFrenchHello } from "../controllers/HelloController.js";


const router = express.Router();

router.get("/", getHello)
router.get("/french", getFrenchHello)

export default router 