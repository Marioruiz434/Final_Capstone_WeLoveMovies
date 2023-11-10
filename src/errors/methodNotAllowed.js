//error function for method not allowed with 405 status
function methodNotAllowed(request, _response, next) {
  next({
    status: 405,
    message: `${request.method} not allowed for ${request.originalUrl}`,
  });
}

module.exports = methodNotAllowed;
