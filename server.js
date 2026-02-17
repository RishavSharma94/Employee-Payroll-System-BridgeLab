const express = require('express')
const fileHandler = require('./modules/fileHandler')
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', async (req, res) => {
  const employees = await fileHandler.read()
  res.render('index', { employees })
})

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000")
})
