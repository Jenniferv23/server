

exports.authCheck = async(req, res, next = (f) => f) => {
  if(!req.headers.authtoken) throw new Error('Unauthorized');

  const valid = req.headers.authtoken === 'Raymond';
  if(!valid) {
      throw new Error('Unauthorized');
  }else{
      next();
  }
}