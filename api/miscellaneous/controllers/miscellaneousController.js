import { applyPatch } from 'fast-json-patch';


/**
* @export
* @function patchObject
* @param {Object} req - request received
* @param {Object} res - response object
* @returns {Object} JSON object (JSend format)
*/
export const patchObject = async (req, res) => {
  try {
    const { body: { json_object: jsonObject, json_patch_object: jsonPatchObject } } = req;

    const patchedObject = applyPatch(JSON.parse(jsonObject), JSON.parse(jsonPatchObject)).newDocument;


    return res.status(200).send({
      patchedObject
    });
  } catch (error) {
    return res.status(500).send({
      message: 'An error occurred'
    });
  }
};
