require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cookieParser = require('cookie-parser')
// db
const connectDB = require('./db/connect')
// middleware
const pageNotFound = require('./middleware/notFound')

// router
const userRouter = require('./routes/index')

// app.use(express.urlencoded());
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))
// app.use(express.static('./public'))

app.get('/', (req, res) => {
  console.log(req.cookies)
  res.send('cookie send successfully')
})

app.use('/', userRouter)
app.use(pageNotFound)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await app.listen(port, console.log(`server is running on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}
start()
