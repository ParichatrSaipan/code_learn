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

// POST /register — สมัครสมาชิกใหม่
app.post('/register', (req, res) => {

})

// GET /users — ดู user ทั้งหมด
app.get('/users', (req, res) => {

})

// GET /users/:id — ดู user ตาม id
app.get('/users/:id', (req, res) => {

})

// PUT /users/:id — แก้ไขข้อมูล user
app.put('/users/:id', (req, res) => {

})

// DELETE /users/:id — ลบ user
app.delete('/users/:id', (req, res) => {

})

const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
