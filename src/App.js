import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { Card } from 'card/index';
import './App.css';

const theme = {
  primary: 'green',
  mango: 'yellow'
}

function App() {
  
  const [id, setId] = useState(1);
  const [card, setCard] = useState([]);
  
  // The second argument is the dependency that we want to watch.
  // If the second argument is set to [] the alert will showed once.
  // useEffect(() => {
  //   alert('Alert js')
  // }, [cards]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      console.log(res.data)
      setCard(res.data)
    })
  }, [id]);

  const changeNameHandler = (event,) => {
    const card_copy = {...card};
    card_copy.name = event.target.value;
    setCard(card_copy);
  }

  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        {(
          <div>
            <input type="number" value={ id } onChange={ e => setId(e.target.value) } />
            <Card
              name={ card.name }
              phone={ card.phone }
              onNameChanges={ event =>  changeNameHandler(event)}
            />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
