import express from 'express';

import {
  loginCustomer
} from '../controllers/loginController';
import {
  loginUserValidator,
} from '../middlewares/validation/usersValidation';

const usersRouter = express.Router();


usersRouter.post('/login',
  loginUserValidator,
  loginCustomer);


export default usersRouter;
