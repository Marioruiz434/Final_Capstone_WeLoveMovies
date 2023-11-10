//error message for path not found with 404 status
function notFound(req, res, next) {
    next({ status: 404, message: `Path not found: ${req.originalUrl}` });
  }
  
  module.exports = notFound;
  