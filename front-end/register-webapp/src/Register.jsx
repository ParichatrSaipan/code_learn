import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ name: '', username: '', email: '', phone: '', age: '', address: '' })
  const [message, setMessage] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.username || !form.email || !form.phone || !form.age || !form.address) {
      setMessage('Please fill all required fields.')
      return
    }
    setMessage('Registered successfully (demo).')
    console.log('Registered', form)
    setForm({ name: '', username: '', email: '', phone: '', age: '', address: '' })
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" />
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" />
      <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age" />
      <input name="address" value={form.address} onChange={handleChange} placeholder="Address" />
      <button type="submit">Create account</button>
      {message && <p className="form-message">{message}</p>}
    </form>
  )
}
