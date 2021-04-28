const jwtSecret = 'your_jwt_secret'; //has to be same key used in theJWT Strategy

const jwt = require('jsonwebtoken'),
  passport = require('passport');

require('./passport'); //local passport file

const cors = require('cors');

let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, //Username your you're encoding in the JWTStrategy
    expiresIn: '7d', //specifies that token will expire in 7 days
    algorithm: 'HS256' //algorithm used to 'sign' or encode the values of the JWTStrategy
  });
}

/* POST login. */
module.exports = (router) => {
  router.post('/login', cors(), (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
}
