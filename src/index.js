const express = require('express');
const routers = require('./routes');

const app = express();

app.use(express.json());
app.use(routers);
app.use((error, request, response, next) => {
  console.log('#### Error Handler');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🚀 Server started at http://localhost:3000'));
