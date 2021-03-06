import { useState } from 'react';
import axios from 'axios';

function UpdateUser() {
  const defaultData = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    state: 'active',
  };

  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState(defaultData);
  const [error, setError] = useState(null);
  const handleChange = (event) => {
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let sendData = {};
    let id;
    try {
      for (const field in formData) {
          console.log(field)
        if (field === 'id') {
          id = +formData[field];
          console.log(id, formData);
        }
        if (sendData[field] !== null && sendData[field] !== '')
          sendData[field] = formData[field];
      }
      console.log(sendData, id);

      axios.put(`http://localhost:3001/users/${id}`, sendData);
      setFormData(defaultData);
      setError(null);
    } catch (error) {
      setError(error);
      setFormData(defaultData);
    }
  };

  return (
    <div className='UpdateUser'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>id</label>
        <input
          type='text'
          onChange={handleChange}
          name='id'
          placeholder='id'
          value={formData.id}
        />
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          onChange={handleChange}
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
        />
        {console.log({ formData })}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          onChange={handleChange}
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          onChange={handleChange}
          name='email'
          placeholder='Email'
          value={formData.email}
        />
        <select name='state' onChange={handleChange} value={formData.state}>
          <option value='pending'>Pending</option>
          <option value='active'>Active</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
