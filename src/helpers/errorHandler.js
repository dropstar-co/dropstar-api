class Error {
  static handleError(error, statusCode, response) {
    return response.status(statusCode).json({
      success: false,
      error
    });
  }
}

export default Error;