import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = async (id) => {
      try {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setLoading(false);
        setUserInfo(res.data);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    getUserInfo(id);
  }, [loading, setLoading]);

  if (loading) return <div className='Profile'>Loading</div>;

  return (
    <div className='Profile'>
      {error ? <h1 className='error'>{error}</h1> : null}
      <p>{userInfo.id}</p>
      <p>{userInfo.email}</p>
      <p>{userInfo.firstName}</p>
      <p>{userInfo.lastName}</p>
      <p>{userInfo.state}</p>
    </div>
  );
}
export default Profile;
