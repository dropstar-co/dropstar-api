export default (res, message, status, data) => {
    res.status(status).send({
      message,
      data
    })
  }