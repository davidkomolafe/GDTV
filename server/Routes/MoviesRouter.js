import express from "express";
import { importMovies } from "../Controllers/MoviesController.js";
import { protect, admin } from "../middlewares/Auth.js";

const router = express.Router();

// *********** PUBLIC NOTES *************
router.post("/import", importMovies);

// *********** PRIVATE ROUTES ********
// *********** PRIVATE ROUTES ********

export default router;
