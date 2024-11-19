import React from 'react';
import useForm from '../hooks/useForm';

function ExampleForm() {
  const initialValues = { name: '', email: '' };
  
  const onSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={values.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

