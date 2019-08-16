import env from 'dotenv';
import jwt from 'jsonwebtoken';


env.config();
const secret = process.env.JWT_SECRET;

/**
* @export
* @function verifyUserToken
* @param {Object} req - request received
* @param {Object} res - response object
* @param {Object} next - next object
* @returns {Object} next object
*/
export async function verifyUserToken(req, res, next) {
  const bearer = req.headers.authorization;
  if (!bearer) { return res.status(403).send({ auth: 'false', message: 'No token provided' }); }
  const token = bearer.split(' ')[1];
  await jwt.verify(token, secret, (err) => {
    if (err) { return res.status(403).send({ auth: 'false', message: 'Failed to authenticate token' }); }
    return next();
  });
}

export default verifyUserToken;
