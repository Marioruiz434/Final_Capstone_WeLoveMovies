const knex = require("../db/connection");


function destroy(reviewId) {
  return knex("reviews").where({ reviewId }).del();
}

async function list(movie_id) {
  return knex("reviews as r")
  .join("movies as m", "m.movie_id", "r.movie_id")
  .select("r.*")
  .where({ "m.movie_id": movie_id });
  
}

function read(reviewId) {
  return knex("reviews").select("*").where({ reviewId }).first();
}

async function readCritic(critic_id) {
  return knex("critics").where({ critic_id }).first();
}

async function setCritic(review) {
  review.critic = await readCritic(review.critic_id);
  return review;
}

async function update(review) {
  return knex("reviews")
    .where({ review_id: review.review_id })
    .update(review, "*")
    .then(() => read(review.review_id))
    .then(setCritic);
}

module.exports = {
  destroy,
  list,
  read,
  update,
};
