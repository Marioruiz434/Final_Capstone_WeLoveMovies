const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);

  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });

}

async function read(req, res) {
  res.json({ data: res.locals.movie });
}

async function list(req, res) {
  const isShowing = req.query.is_showing === "true";
    const data = await service.list(isShowing);
    res.json({ data });
}


async function listTheatersForMovie(req, res) {
  const movieId = req.params.movieId;
    const data = await service.listTheatersForMovie(movieId);
    res.json({ data });
}

async function listReviewsForMovie(req, res) {
  const movieId = req.params.movieId;
    const data = await service.listReviewsForMovie(movieId);
    res.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
  listTheatersForMovie: [asyncErrorBoundary(listTheatersForMovie)],
  listReviewsForMovie: [asyncErrorBoundary(listReviewsForMovie)]
};
