import { Router, Request, Response } from "express";
import {indexu} from "../src/controllers/usercontrol";
const router = Router();

router.get("/", indexu.index);
router.post("/createUser", indexu.newUser);
export default router;
