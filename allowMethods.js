const methods = (methods = ['GET']) => (req, res, next) => {
  if( methods.includes(req.method)) {
    return next()
  }
  else
    return res.sendStatus(405)
}

module.exports = methods;