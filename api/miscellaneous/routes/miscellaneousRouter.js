import express from 'express';

import {
  patchObject, createThumbnail
} from '../controllers/miscellaneousController';
import {
  jsonpatchValidator, thumbnailValidator
} from '../middlewares/validation/miscellaneousValidation';
import verifyUser from '../../authentication/authenticate';

const miscellaneousRouter = express.Router();


miscellaneousRouter.patch('/jsonpatch',
  verifyUser,
  jsonpatchValidator,
  patchObject);

miscellaneousRouter.post('/thumbnail',
  verifyUser,
  thumbnailValidator,
  createThumbnail);


export default miscellaneousRouter;
