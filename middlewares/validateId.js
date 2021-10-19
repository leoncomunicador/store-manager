const isIdValid = (req, res, next) => {
  const { id } = req.params;
    if (+id.length !== 24) {
    return res.status(422).json({
      err: { code: 'invalid_data', message: 'Wrong id format' },
    });
  }
  next();
};

module.exports = isIdValid;