# [WeLoveMovies_Backend](https://welovemovies-mr.onrender.com)
Engineered a database and RESTful API with CRUD operations allowing users to access data about the latest movies, theaters, and reviews.

## Routes
- /movies
- /movies?is_showing=true
- /movies/:movieId
- /movies/:movieId/theaters
- /movies/:movieId/reviews
- /theaters
- /reviews [PUT/DELETE]

### Tasks
Built an API following RESTful design principles<br />
Utilizied common middleware packages<br />
Provided access to relevant information through route and query parameters<br />
Created an error handler for the case where a route doesn't exist<br />
Customized knexfile.js file for staging<br />
Used Knex to write database queries, completeing CRUD routes in an Express server<br />
Utilized joined and nested data with Knex<br />
Wrote database migrations using Knex's migration tool<br />
Deployed using Render with matching front end
