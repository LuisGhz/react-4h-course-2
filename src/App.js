import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { Card } from 'card/index';
import Button from 'elements/button/Button';
import './App.css';

const theme = {
  primary: 'green',
  mango: 'yellow'
}

function App() {
  
  const [showCard, setShowCard] = useState(true);
  
  const [cards, setCards] = useState([]);
  
  // The second argument is the dependency that we want to watch.
  // If the second argument is set to [] the alert will showed once.
  // useEffect(() => {
  //   alert('Alert js')
  // }, [cards]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res.data)
      setCards(res.data)
    })
  }, []);

  const buttonClasses = ['button']
  
  if (cards.length < 3) buttonClasses.push('pink-button');
  if (cards.length < 2) buttonClasses.push('red-button');
  
  const toggleCard = () => setShowCard(!showCard);

  const changeNameHandler = (event, index) => {
    const cards_copy = [...cards];
    cards_copy[index].name = event.target.value;
    setCards(cards_copy);
  }

  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <button className={ buttonClasses.join(' ') } onClick={ () => toggleCard() } style={{ 'margin': '1rem 0' } }>Show / Hide card</button>
        { showCard && (
        cards.map(({ name, phone }, index) => 
          <Card key={ index }
            name={ name }
            phone={ phone }
            onNameChanges={ event =>  changeNameHandler(event, index)}
          />)
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
