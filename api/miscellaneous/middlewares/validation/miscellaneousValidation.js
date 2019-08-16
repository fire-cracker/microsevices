import { validationHandler } from '../../../helpers/validationHandler';
import {
  miscellaneousSchema
} from './schemas/miscellaneousSchema';


/**
* @export
* @function miscellaneousValidator
* @param {Object} req - request received
* @param {Object} res - response object
* @param {Object} next - next object
* @returns {Object} next object
*/
export const miscellaneousValidator = (req, res, next) => {
  return validationHandler(req.body, miscellaneousSchema, res, next);
};
