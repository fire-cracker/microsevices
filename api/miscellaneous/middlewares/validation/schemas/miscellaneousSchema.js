import Joi from '@hapi/joi';

const jsonObject = Joi.object().min(1).required();
const jsonPatchObject = Joi.array().items(Joi.object({
  op: Joi.string().required(),
  path: Joi.string().required(),
  value: Joi.any().required()
}).min(3)).min(1).required();


export const miscellaneousSchema = {
  json_object: jsonObject,
  json_patch_object: jsonPatchObject
};
