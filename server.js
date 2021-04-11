const express = require('express')
const path = require('path')

const app = express()

const {
  PORT=80,
  HOST="localhost"
} = process.env

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`http://${HOST}`)
})