const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");


router.use("/:movieId/theaters").get(controller.list, theatersRouter).all(methodNotAllowed);
router.use("/:movieId/reviews").get(controller.list, reviewsRouter).all(methodNotAllowed);
router.route("/:movieId").get(controller.read).all(methodNotAllowed);


router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:is_showing=true").get(controller.list).all(methodNotAllowed);

module.exports = router;
