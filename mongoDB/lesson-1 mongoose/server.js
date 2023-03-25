const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/users')

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/usersDB', {
}).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.log(err)
})

//! получение всех пользователей из коллекции users 
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
})
// app.get('/users', async (req, res) => {
//   const data = await User
//     .find()
//     .then((users) => {
//       res
//         .status(200)
//         .json(users)
//     })
// })

//! получение одного пользователя по id
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id, { name: 1, team: 1, raiting: 1 })
  res.send(user)
})

//! поиск и удаление одного пользователя по id
app.delete('/users/:id', (req, res) => {
  User
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result)
    })
})

//! обновление документа 
app.patch('/users/:id', async (req, res) => {
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result)
    })
})

//! добавление нового документа
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error.message)
  }
  // добавить несколько
  // try {
  //   const users = await User.insertMany(req.body);
  //   res.status(201).send(users);
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
