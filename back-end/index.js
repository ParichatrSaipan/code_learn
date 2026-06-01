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
  const { name, username, email, phone, age, address } = req.body

  if (!name || !username || !email || !phone || !age || !address) {
    return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบทุกช่อง' })
  }

  const users = readUsers()
  const existing = users.find(u => u.email === email)
  if (existing) {
    return res.status(409).json({ message: 'Email นี้ถูกใช้แล้ว' })
  }

  const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1
  const user = { id: nextId, name, username, email, phone, age, address }
  users.push(user)
  writeUsers(users)
  res.status(201).json({ message: 'สมัครสำเร็จ', user })
})

// GET /users — ดู user ทั้งหมด
app.get('/users', (req, res) => {
  res.json(readUsers())
})

// GET /users/:id — ดู user ตาม id
app.get('/users/:id', (req, res) => {
  const users = readUsers()
  const user = users.find(u => u.id === Number(req.params.id))
  if (!user) return res.status(404).json({ message: 'ไม่พบ user' })
  res.json(user)
})

// PUT /users/:id — แก้ไขข้อมูล user
app.put('/users/:id', (req, res) => {
  const users = readUsers()
  const user = users.find(u => u.id === Number(req.params.id))
  if (!user) return res.status(404).json({ message: 'ไม่พบ user' })

  const { name, username, email, phone, age, address } = req.body
  if (name !== undefined) user.name = name
  if (username !== undefined) user.username = username
  if (email !== undefined) user.email = email
  if (phone !== undefined) user.phone = phone
  if (age !== undefined) user.age = age
  if (address !== undefined) user.address = address

  writeUsers(users)
  res.json({ message: 'แก้ไขสำเร็จ', user })
})

// DELETE /users/:id — ลบ user
app.delete('/users/:id', (req, res) => {
  const users = readUsers()
  const index = users.findIndex(u => u.id === Number(req.params.id))
  if (index === -1) return res.status(404).json({ message: 'ไม่พบ user' })
  users.splice(index, 1)
  writeUsers(users)
  res.json({ message: 'ลบสำเร็จ' })
})

const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
