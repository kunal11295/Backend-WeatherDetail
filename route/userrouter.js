import express from "express";
import { checkuser, registrationcheck } from "../middleware/authmiddleware.js";
import { registration } from "../Controller/usercontroller.js";
import { Temp, getAstro, getwindspeed } from "../Controller/weathercontroller.js";

var router = express.Router();


router.post('/registration-check',registrationcheck,registration)
router.post('/Temp',checkuser,Temp);
router.post('/astro',getAstro);
router.post('/getwindspeed',getwindspeed)


export default router;