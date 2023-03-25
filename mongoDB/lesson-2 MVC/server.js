const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user-routes')

const app = express()
app.use(express.json())
app.use(userRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/usersDB', {
}).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.log(err)
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
