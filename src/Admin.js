import axios from 'axios';
import { useEffect, useState } from 'react';
import User from './User';

function Admin() {
  const [loading, setLoading] = useState(true);
  const [usersInfo, setUsersInfo] = useState(null);
  const [error, setError] = useState(null);

  //use useeffect to tell your componenet to do something after render
  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:3001/users');
        setUsersInfo(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };

    getAllUsers();
  }, [loading, setLoading]);

  if (loading) {
    return (
      <div className='Admin'>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className='Admin'>
      {usersInfo ? usersInfo.map((user) => {
          return <User user={user} key={`${user.name}-${user.id}`}/>
      }) : <p>{error}</p>}
    </div>
  );
}

export default Admin;
