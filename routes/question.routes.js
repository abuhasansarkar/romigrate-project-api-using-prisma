import express from "express";
import {
    createQuestion,
    deleteQuestion,
    getQuestions,
    singleQuestion,
    updateQuestion,
} from "../controllers/question.controller.js";

const router = express.Router();

// Get All Post or Quesiton
router.get("/", getQuestions);

// Create or Post Quesiton
router.post("/", createQuestion);

// Update Post or Quesiton

router.put("/:id", updateQuestion);

// Get Single Post or Quesiton
router.get("/:id", singleQuestion);

// Delete Post or Quesiton
router.delete("/:id", deleteQuestion);

export default router;
