import { applyPatch } from 'fast-json-patch';
import path from 'path';
import sharp from 'sharp';
import download from 'image-downloader';


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

/**
* @export
* @function createThumbnail
* @param {Object} req - request received
* @param {Object} res - response object
* @returns {Object} JSON object (JSend format)
*/
export const createThumbnail = async (req, res) => {
  try {
    const { body: { image_url: imageUrl } } = req;
    const options = {
      url: imageUrl,
      dest: './api/public/images/originalImages'
    };

    const { filename } = await download.image(options);

    const resizedImagePath = './api/public/images/resizedImages/';

    const imageName = path.basename(imageUrl);

    await sharp(filename).resize(50, 50).toFile(`${resizedImagePath}resized.${imageName}`);

    return res.status(200).sendFile(path.join(__dirname, `../../public/images/resizedImages/resized.${imageName}`));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).send({
        error,
        message: 'Ensure image url is valid'
      });
    }
    return res.status(500).send({
      message: 'An error occurred'
    });
  }
};
