import Header from './components/header.jsx'
import Register from './components/Register.jsx'
import UserList from './components/UserList.jsx'
import EditUser from './components/EditUser.jsx'
import useUsers from './data/useUsers.js'

export default function App() {
  const { users, editingUser, setEditingUser, addUser, editUser, removeUser } = useUsers()

  return (
    <>
      <Header />
      <section id="center">
        <Register onRegister={addUser} />
        <UserList users={users} onSelectUser={setEditingUser} onDelete={removeUser} />
        <EditUser
          user={editingUser}
          onSave={editUser}
          onClose={() => setEditingUser(null)}
        />
      </section>
    </>
  )
}
