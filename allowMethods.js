const methods = (methods = ['GET']) => (req, res, next) => {
  if( methods.includes(req.method)) {
    return next()
  }
  return res.sendStatus(405)
}

module.exports = methods;