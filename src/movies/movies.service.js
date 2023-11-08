const knex = require("../db/connection");

async function list(is_showing) {
  return knex("movies")
    .select("movies.*")
    .modify((queryBuilder) => {
      if (is_showing) {
        queryBuilder
          .join(
            "movies_theaters",
            "movies.movie_id",
            "movies_theaters.movie_id"
          )
          .where({ "movies_theaters.is_showing": true })
          .groupBy("movies.movie_id");
      }
    });
}

async function read(movie_id) {
  return knex("restaurants").select("*").where({ movie_id }).first();
  
}

async function listTheatersForMovie(movieId) {
  return knex("theaters")
    .select("theaters.*")
    .join("movies_theaters", "theaters.theater_id", "movies_theaters.theater_id")
    .where({ "movies_theaters.movie_id": movieId });
}


async function listReviewsForMovie(movieId) {
  return knex("reviews as r")
    .select("r.review_id", "r.content", "r.score", "r.created_at", "r.updated_at", "r.critic_id", "r.movie_id", "c.critic_id as critic.critic_id", "c.preferred_name", "c.surname", "c.organization_name", "c.created_at as critic.created_at", "c.updated_at as critic.updated_at")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .where({ "r.movie_id": movieId });
}

module.exports = {
  list,
  read,
  listTheatersForMovie,
  listReviewsForMovie
};
