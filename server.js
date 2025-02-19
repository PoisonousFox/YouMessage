const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/chatapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const messageSchema = new mongoose.Schema({
  sender: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);

const secret = 'mysecret';

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.send({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
    res.send({ token });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

app.post('/messages', async (req, res) => {
  const { sender, content } = req.body;
  const message = new Message({ sender, content });
  await message.save();
  res.send({ message: 'Message sent successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});