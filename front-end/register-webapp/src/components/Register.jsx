import { useState } from 'react'

export default function Register({ onRegister }) {
  const [form, setForm] = useState({ name: '', username: '', email: '', phone: '', age: '', address: '' })
  const [message, setMessage] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const allFilled = Object.values(form).every((value) => value !== '')
    if (!allFilled) {
      setMessage('Please fill all required fields.')
      return
    }

    onRegister(form)
    setMessage('Registered successfully (demo).')
    setForm({ name: '', username: '', email: '', phone: '', age: '', address: '' })
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name"     type="text"   value={form.name}     onChange={handleChange} placeholder="Full name"            />
      <input name="username" type="text"   value={form.username}  onChange={handleChange} placeholder="Username"             />
      <input name="email"    type="email"  value={form.email}     onChange={handleChange} placeholder="Email"                />
      <input name="phone"    type="tel"    value={form.phone}     onChange={handleChange} placeholder="Phone number"         pattern="[0-9]{10}" />
      <input name="age"      type="number" value={form.age}       onChange={handleChange} placeholder="Age" min="1" max="120" />
      <input name="address"  type="text"   value={form.address}   onChange={handleChange} placeholder="Address"              />

      <button type="submit">Create account</button>

      {message && <p className="form-message">{message}</p>}
    </form>
  )
}
