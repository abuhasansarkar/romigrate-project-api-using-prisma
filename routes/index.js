import express from "express";
import commentRoutes from "./comment.routes.js";
import questionRoutes from "./question.routes.js";
import replayRoutes from "./replay.routes.js";
import userRoutes from "./user.routes.js";

const router = express.Router();

// User API
router.use("/api/user", userRoutes);

// Question API
router.use("/api/question", questionRoutes);

// Question API
router.use("/api/comment", commentRoutes);

// Question API
router.use("/api/replay", replayRoutes);

export default router;
