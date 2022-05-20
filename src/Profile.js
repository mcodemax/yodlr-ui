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
        setLoading(false);
        setError(error.message);
      }
    };

    getUserInfo(id);
  }, []);

  if (loading) return <div className='Profile'>Loading</div>;

  return (
    <div className='Profile'>
      {error ? <h1 className='error'>{error}</h1> : null}
      {userInfo ? <><p>{userInfo.id}</p>
      <p>{userInfo.email}</p>
      <p>{userInfo.firstName}</p>
      <p>{userInfo.lastName}</p>
      <p>{userInfo.state}</p></> : null}
    </div>
  );
}
export default Profile;
