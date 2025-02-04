import { Router } from "express";
import { userData } from "../controllers/user.controller";

const router = Router();

router.route("/userdata").post(userData);

export default router;