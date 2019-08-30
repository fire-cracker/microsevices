import { validationHandler } from '../../../helpers/validationHandler';
import {
  jsonpatchSchema, thumbnailSchema
} from './schemas/miscellaneousSchema';


/**
* @export
* @function miscellaneousValidator
* @param {Object} req - request received
* @param {Object} res - response object
* @param {Object} next - next object
* @returns {Object} next object
*/
export const jsonpatchValidator = (req, res, next) => {
  return validationHandler(req.body, jsonpatchSchema, res, next);
};

/**
* @export
* @function thumbnailValidator
* @param {Object} req - request received
* @param {Object} res - response object
* @param {Object} next - next object
* @returns {Object} next object
*/
export const thumbnailValidator = (req, res, next) => {
  return validationHandler(req.body, thumbnailSchema, res, next);
};
