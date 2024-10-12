import express from "express";
import { allReplays, createReplay } from "../controllers/replay.controller.js";


const router = express.Router();

// Get All Post or Comment
router.get("/", allReplays);

// Create or Post Comment
router.post("/", createReplay);



export default router;
