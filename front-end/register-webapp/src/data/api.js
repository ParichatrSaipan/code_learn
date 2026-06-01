const BASE_URL = 'http://localhost:3000'

// POST /register — สมัครสมาชิกใหม่
export async function registerUser(userData) {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    return await res.json()
  } catch (error) {
    console.error('registerUser error:', error)
  }
}

// GET /users — ดู user ทั้งหมด
export async function getAllUsers() {
  try {
    const res = await fetch(`${BASE_URL}/users`)
    return await res.json()
  } catch (error) {
    console.error('getAllUsers error:', error)
  }
}

// GET /users/:id — ดู user ตาม id
export async function getUserById(id) {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`)
    return await res.json()
  } catch (error) {
    console.error('getUserById error:', error)
  }
}

// PUT /users/:id — แก้ไขข้อมูล user
export async function updateUser(id, userData) {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    return await res.json()
  } catch (error) {
    console.error('updateUser error:', error)
  }
}

// DELETE /users/:id — ลบ user
export async function deleteUser(id) {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
    })
    return await res.json()
  } catch (error) {
    console.error('deleteUser error:', error)
  }
}
