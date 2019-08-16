import path from 'path';
import gateway from 'express-gateway';
import './api/users/index';
import './api/miscellaneous/index';

gateway()
  .load(path.join(__dirname, './api/config'))
  .run();
