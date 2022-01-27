import PropTypes from 'prop-types';

const BtnCounter = ({ increment, decrement }) => (
  <div>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

BtnCounter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default BtnCounter;
