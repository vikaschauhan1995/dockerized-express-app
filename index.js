const express = require('express');
const app = express();
// const PORT = 8080;
const userRouter = require('./routes/user');

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Docker World!!fff');
});

app.use(userRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});