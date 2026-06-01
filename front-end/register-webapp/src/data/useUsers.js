import { useState, useEffect } from 'react'
import { getAllUsers, registerUser, updateUser, deleteUser } from '../api.js'

export default function useUsers() {
  const [users, setUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null)

  useEffect(() => {
    getAllUsers().then(data => { if (data) setUsers(data) })
  }, [])

  async function addUser(user) {
    const res = await registerUser(user)
    if (res?.user) setUsers([...users, res.user])
  }

  async function editUser(updatedUser) {
    const res = await updateUser(updatedUser.id, updatedUser)
    if (res?.user) setUsers(users.map((u) => u.id === updatedUser.id ? res.user : u))
    setEditingUser(null)
  }

  async function removeUser(id) {
    await deleteUser(id)
    setUsers(users.filter((u) => u.id !== id))
    if (editingUser?.id === id) setEditingUser(null)
  }

  return { users, editingUser, setEditingUser, addUser, editUser, removeUser }
}
