function User({ user }) {
  return (
    <div className='User'>
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.state}</p>
    </div>
  );
}

export default User;
