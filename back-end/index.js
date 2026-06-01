const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.text());
app.use(express.json());

const DB_FILE = './users.json'

function readUsers() {
  const data = fs.readFileSync(DB_FILE, 'utf-8')
  return JSON.parse(data)
}

function writeUsers(users) {
  fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2))
}

app.get('/', (req, res) => {
  res.send('My first API')
})


const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
