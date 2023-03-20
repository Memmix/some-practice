const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

// Создание схемы и модели для коллекции 
const schema = new mongoose.Schema({});
const Model = mongoose.model('users', schema);

// Получение данных из коллекции
app.get('/users', async (req, res) => {
  const data = await Model.find({ raiting: { $gte: 4000 } }, { name: 1, raiting: 1 });
  res.send(data);
});

// Запуск сервера
app.listen(3000, () => {
  console.log('Server started');
});

