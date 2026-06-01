export default function UserList({ users, onSelectUser, onDelete }) {
  return (
    <div className="userlist">
      <h2>Registered Users</h2>

      <div className="userlist-scroll">
        {users.length === 0 && (
          <p className="userlist-empty">No users registered yet.</p>
        )}

        {users.map((user) => (
          <div key={user.id} className="userlist-card">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <div className="userlist-card-actions">
              <button className="btn-edit" onClick={() => onSelectUser(user)}>Edit</button>
              <button className="btn-delete" onClick={() => onDelete(user.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
