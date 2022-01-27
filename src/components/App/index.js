// == Import
import { useState } from 'react';
import BtnCounter from '../ButtonContainer/BtnCounter';
import Form from '../Form/Form';
import './styles.css';

// == Composant
const App = () => {
  const [counter, setcounter] = useState(0);
  const [michel, setMichel] = useState('michel');
  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter - 1);
  };
  const changeName = (Thibaut) => {
    setMichel(Thibaut);
  };
  return (
    <div className="app">
      <h1> {counter} </h1>
      <p>{michel}</p>
      <BtnCounter increment={increment} decrement={decrement} />
      <Form changeName={changeName} />
    </div>
  );
};

// == Export
export default App;

// Faire une fonction avec un params value qui setMichel a la valeur de value
// Dans le composant Form faire un <form> et dedant un input de type text qui va changer la
// valeur de michel en utilisant un callback et un event soit onChange ou onSubmit
