const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user-routes')

const URL = '...' // своё

const app = express()
app.use(express.json())
app.use(userRoutes)

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.log(err)
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});



