function User(props) {
  return (
    <div className='User'>
        {console.log(props.user)}
      <p>{props.user.id}</p>
      <p>{props.user.email}</p>
      <p>{props.user.firstName}</p>
      <p>{props.user.lastName}</p>
      <p>{props.user.state}</p>
    </div>
  );
}

export default User;
