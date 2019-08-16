import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';

import miscellaneousRouter from './routes/miscellaneousRouter';

const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});

dotenv.config();

const port = process.env.PORT || process.env.MISCELLANEOUS_PORT;
// Create global app object
const app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(`${__dirname}/public`));
app.use('/', miscellaneousRouter);

app.listen(port, () => {
  logger.debug(`Miscellaneous service running on port ${chalk.blue(port)}`);
});

export default app;
