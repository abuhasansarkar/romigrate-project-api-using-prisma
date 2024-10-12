import express from "express";
import {
    createComment,
    deleteComment,
    getComment,
    updateComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

// Get All Post or Comment
router.get("/", getComment);

// Create or Post Comment
router.post("/", createComment);

// Update Post or Comment

router.put("/:id", updateComment);

// Delete Post or Comment
router.delete("/:id", deleteComment);

export default router;
