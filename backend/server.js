const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({
  path: './config.env',
});
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful !');
  })
  .catch((err) => console.error(err));

const port = process.env.PORT;
app.listen(port, 'localhost', () => {
  console.log(`App running on port ${port} in ${process.env.NODE_ENV} mode`);
});
