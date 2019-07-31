import express from 'express';
import session from 'express-session';
import cors from 'cors';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});

dotenv.config();

const port = process.env.PORT || process.env.LOCAL_PORT;
// Create global app object
const app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: 'microserviceproject',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.status(200).send({
  status: 'connection successful',
  message: 'Welcome to my Simple Stateless Micorservice Project!'
}));

app.get('*', (req, res) => res.status(200).send({
  status: 'fail',
  message: 'Route not found',
}));

app.listen(port, () => {
  logger.debug(`Server running on port ${chalk.blue(port)}`);
});

export default app;
