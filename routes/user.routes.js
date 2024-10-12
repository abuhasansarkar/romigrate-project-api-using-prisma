import express from "express";
import {
    createUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// All Users
router.get("/", getAllUser);

// Create User
router.post("/", createUser);

// Update user data
router.put("/:username", updateUser);

// Get Single user data
router.get("/:username", getSingleUser);

// Delete user data
router.delete("/:username", deleteUser);

export default router;
