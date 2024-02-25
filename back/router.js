import express from "express"
import champion from './routes/ChampionRoutes.js'
import hello from './routes/HelloRoutes.js'

const router = express.Router();

router.use('/champions', champion)

router.use('/Hello', hello)

export default router