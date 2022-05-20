import { useState } from 'react';
import axios from 'axios';

function Register() {
  const defaultData = {
    email: '',
    firstName: '',
    lastName: '',
    state: 'active',
  };
  const [formData, setFormData] = useState(defaultData);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:3001/users', formData);
      setFormData(defaultData);
      setError(null);
    } catch (error) {
      setError(error);
      setFormData(defaultData);
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='Register'>
      {error ? <h2 className='error'>{error}</h2> : null}

      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
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

export default Register;
