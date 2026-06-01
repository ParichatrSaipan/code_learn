import { useState } from 'react'
import './App.css'

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      setMessage('Please fill all required fields.')
      return
    }
    if (form.password !== form.confirm) {
      setMessage("Passwords don't match.")
      return
    }
    setMessage('Registered successfully (demo).')
    console.log('Registered', { name: form.name, email: form.email })
    setForm({ name: '', email: '', password: '', confirm: '' })
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <input name="confirm" type="password" value={form.confirm} onChange={handleChange} placeholder="Confirm password" />
      <button type="submit">Create account</button>
      {message && <p className="form-message">{message}</p>}
    </form>
  )
}
