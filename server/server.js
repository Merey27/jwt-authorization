const express = require('express');
const mockDB = require('./data.mock');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwtService = require('./jwt');

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', function (req, res) {
  const loginData = req.body;

  if (!loginData || !loginData.username || !loginData.password) {
    return res.status(400).send('Please enter valid data!');
  }

  const user = mockDB.users.find(user => user.username === loginData.username);

  if (!user) {
    return res.status(400).send('Username or password is wrong!');
  }

  if (user && user.password !== loginData.password) {
    return res.status(400).send('Username or password is wrong!');
  }

  const payload = {
    id: user.id,
    username: user.username,
    password: user.password
  }

  const accessToken = jwtService.getAccessToken(payload);
  const refreshToken = jwtService.getRefreshToken(payload);

  res.send({
    user,
    accessToken,
    refreshToken
  });
});
