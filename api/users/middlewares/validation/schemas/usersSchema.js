import Joi from '@hapi/joi';

const username = Joi.string().trim().min(8).max(150)
  .required();
const password = Joi.string().min(8).max(150).trim()
  .regex(/^[a-zA-Z0-9]{3,30}$/)
  .required();


export const loginUserSchema = {
  username,
  password
};
