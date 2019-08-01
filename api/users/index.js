import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';

import usersRouter from './routes/usersRouter';

const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});

dotenv.config();

const port = process.env.PORT || process.env.USER_SERVICE_PORT;
// Create global app object
const app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(`${__dirname}/public`));
app.use('/users', usersRouter);

app.listen(port, () => {
  logger.debug(`Users service running on port ${chalk.blue(port)}`);
});

export default app;
