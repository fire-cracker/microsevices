import jwt from 'jsonwebtoken';
import env from 'dotenv';

env.config();
const secret = process.env.JWT_SECRET;


/**
* @export
* @function loginCustomer
* @param {Object} req - request received
* @param {Object} res - response object
* @returns {Object} JSON object (JSend format)
*/
export const loginCustomer = async (req, res) => {
  try {
    const { body: { username } } = req;

    const userToken = jwt.sign({
      username
    }, secret, { expiresIn: '24h' });


    return res.status(200).send({
      username,
      accessToken: `Bearer ${userToken}`,
      expires_in: '24h'
    });
  } catch (error) {
    return res.status(500).send({
      message: 'An error occurred'
    });
  }
};
