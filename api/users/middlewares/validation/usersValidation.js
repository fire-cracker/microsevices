import { validationHandler } from './validationHandler';
import {
  loginUserSchema
} from './schemas/usersSchema';


/**
* @export
* @function loginUserValidator
* @param {Object} req - request received
* @param {Object} res - response object
* @param {Object} next - next object
* @returns {Object} next object
*/
export const loginUserValidator = (req, res, next) => {
  return validationHandler(req.body, loginUserSchema, res, next);
};
