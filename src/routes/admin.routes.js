import { Router } from "express";
import {requireAuth} from "../middleware/auth.middleware.js"
import { requireRole } from "../middleware/requireRole.middleware.js";

const router =Router();
router.use(requireAuth);
router.use(requireRole);
router.get("/todos",admincontroler.listallusers);
router.get("/user",admincontroler.getallusers)