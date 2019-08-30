import Joi from '@hapi/joi';

const jsonObject = Joi.object().min(1).required();
const jsonPatchObject = Joi.array().items(Joi.object({
  op: Joi.string().required(),
  path: Joi.string().required(),
  value: Joi.any().required()
}).min(3)).min(1).required();
const imageUrl = Joi.string()
  .regex(/:\/\/[0-9a-z-.\/_]+(\.(jpe?g|png|tif|gif|svg))$/mi)
  .uri(
    {
      scheme: [
        'http',
        /https?/
      ]
    }
  );


export const jsonpatchSchema = {
  json_object: jsonObject,
  json_patch_object: jsonPatchObject
};

export const thumbnailSchema = {
  image_url: imageUrl
};
