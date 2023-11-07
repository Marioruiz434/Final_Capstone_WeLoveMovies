const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const { as } = require("../db/connection");

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movie_id);

  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });

  next({});
}

async function read(req, res) {
  res.json({ data: res.locals.movie });
}

async function list(req, res) {
  const isShowing = req.query.is_showing === "true";

  try {
    const movies = await service.list(isShowing);
    res.json({ data: movies });
  } catch (error) {
   
    res.status(500).json({ error: "Internal server error" });
  }
}


async function listTheatersForMovie(req, res) {
  const movieId = req.params.movieId;

  try {
    const theaters = await service.listTheatersForMovie(movieId);
    res.json({ data: theaters });
  } catch (error) {
    
    res.status(500).json({ error: "Internal server error" });
  }
}

async function listReviewsForMovie(req, res) {
  const movieId = req.params.movieId;

  try {
    const reviews = await service.listReviewsForMovie(movieId);
    res.json({ data: reviews });
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
  listTheatersForMovie: [asyncErrorBoundary(listTheatersForMovie)],
  listReviewsForMovie: [asyncErrorBoundary(listReviewsForMovie)]
};
