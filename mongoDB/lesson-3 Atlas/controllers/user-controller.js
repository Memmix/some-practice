const User = require('../models/users')

//! получение одного пользователя по id
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id, { name: 1, team: 1, raiting: 1 })
  res.send(user)
}

//! получение всех пользователей из коллекции users 
const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
}

//! поиск и удаление одного пользователя по id
const deleteUser = (req, res) => {
  User
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res
        .status(200)
        .json(result)
    })
}

//! обновление документа 
const updateUser = (req, res) => {
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res
        .status(200)
        .json(result)
    })
}

//! добавление нового документа
const addUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  addUser
}