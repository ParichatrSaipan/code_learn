import { useState, useEffect } from 'react'
import { getAllUsers, registerUser, updateUser, deleteUser } from './api.js'

export default function useUsers() {
  const [users, setUsers] = useState([])
  const [editingUser, setEditingUser] = useState(null)

  useEffect(() => {
    // load all users when app starts
  }, [])

  async function addUser(user) {

  }

  async function editUser(updatedUser) {

  }

  async function removeUser(id) {

  }

  return { users, editingUser, setEditingUser, addUser, editUser, removeUser }
}
