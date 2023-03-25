const express = require('express')
const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  addUser
} = require('../controllers/user-controller')

// поскольку само приложение app определено в файле сервера, правильно будет создать внутри файла роутов своё мини приложение, которое будет работать с запросами
const router = express.Router()

router.get('/users', getUsers)
router.get('/users/:id', getUser)
router.delete('/users/:id', deleteUser)
router.patch('/users/:id', updateUser)
router.post('/users/', addUser)

module.exports = router