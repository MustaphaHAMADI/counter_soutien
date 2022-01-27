import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ changeName }) => {
  const [input, setinput] = useState('');
  const handleChange = (event) => {
    setinput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    changeName(input);
  };
  return (
    <div>
      <form type="submit" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Form;
