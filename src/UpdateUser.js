import { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const defaultData = {
    email: '',
    firstName: '',
    lastName: '',
    state: 'active',
  };

  const [loaded, setLoaded] = useState(false);
  const [FormData, setFormData] = useState(defaultData);

  return (
    <div className='UpdateUser'>
      <form>
           
      </form>
    </div>
  );
}

export default UpdateUser;
