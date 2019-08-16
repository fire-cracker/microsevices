import express from 'express';

import {
  patchObject
} from '../controllers/miscellaneousController';
import {
  miscellaneousValidator,
} from '../middlewares/validation/miscellaneousValidation';
import verifyUser from '../../authentication/authenticate';

const miscellaneousRouter = express.Router();


miscellaneousRouter.patch('/jsonpatch',
  verifyUser,
  miscellaneousValidator,
  patchObject);


export default miscellaneousRouter;
