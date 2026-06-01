import { useState, useEffect } from 'react'

export default function EditUser({ user, onSave, onClose }) {
  const [form, setForm] = useState(user ? { ...user } : {})

  useEffect(() => {
    if (user) setForm({ ...user })
  }, [user])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const allFilled = Object.values(form).every((value) => String(value) !== '')
    if (!allFilled) return

    onSave(form)
  }

  if (!user) {
    return (
      <div className="edit-form edit-form--empty">
        <h2>Edit User</h2>
        <p className="userlist-empty">Please select a user to edit</p>
      </div>
    )
  }

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <h2>Edit User</h2>

      <input name="name"     value={form.name}     onChange={handleChange} placeholder="Full name"    />
      <input name="username" value={form.username}  onChange={handleChange} placeholder="Username"     />
      <input name="email"    value={form.email}     onChange={handleChange} placeholder="Email"        />
      <input name="phone"    value={form.phone}     onChange={handleChange} placeholder="Phone number" />
      <input name="age"      value={form.age}       onChange={handleChange} placeholder="Age" type="number" />
      <input name="address"  value={form.address}   onChange={handleChange} placeholder="Address"      />

      <div className="edit-form-actions">
        <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
        <button type="submit" className="btn-save">Save</button>
      </div>
    </form>
  )
}
