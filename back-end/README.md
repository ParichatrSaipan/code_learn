# Back-end
1. Go to server folder and install dependencies

```bash
cd server
npm init # First time only, to create package.json !!!
npm install # only that pakage need update or install new package !!!
npm install express # rest api framework
```

2. Create file index.js and add code

3. Run the server

```bash
node index.js
```
or 

```bash
npx nodemon index.js # auto restart server when code change
```

4. Add code about Start API

```javascript
const express = require('express')
const app = express()
app.use(express.text());
app.use(express.json());


const port = 3000;
const host = 'localhost';
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
```

5. Add code about API

Objective:
- สร้าง API สำหรับ Register (สมัครสมาชิก)

Structure of user
```JSON
{
  "id": 1,
  "name": "ชื่อจริง",
  "username": "ชื่อผู้ใช้",
  "email": "email@example.com",
  "phone": "0812345678",
  "age": 20,
  "address": "ที่อยู่"
}
```

API ที่ต้องสร้าง

| Method | Path | ทำอะไร |
|--------|------|--------|
| POST | /register | สมัครสมาชิกใหม่ |
| GET | /users | ดู user ทั้งหมด |
| GET | /users/:id | ดู user ตาม id |
| PUT | /users/:id | แก้ไขข้อมูล user |
| DELETE | /users/:id | ลบ user |

