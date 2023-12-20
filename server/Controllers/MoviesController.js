import { MoviesData } from "../Data/MovieData.js";
import Movie from "../Models/MoviesModels.js";
import asyncHandler from "express-async-handler";

// *********** PUBLIC CONTROLLERS **************
// @desc import movies
// @route POST /api/movies/import
// @access Public

const importMovies = asyncHandler(async (req, res) => {
  // first make  sureour movies is empty by deleting all documennts
  await Movie.deleteMany({});
  //then we insert allmovies from MovieData
  const movies = await Movie.insertMany(MoviesData);
  res.status(201).json(movies);
});

// @desc get all movies
// @route POST /api/movies
// @access Public

const getMovies = asyncHandler(async());
export { importMovies };
