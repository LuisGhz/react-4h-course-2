import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from 'card/index';
import Button from 'elements/button/Button';
import './App.css';

const theme = {
  primary: 'green',
  mango: 'yellow'
}

function App() {
  
  const [showCard, setShowCard] = useState(true);
  
  const [cards, setCards] = useState([
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin 1',
      title: 'Customer Research Developer'
    },
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin 2',
      title: 'Customer Research Developer'
    },
    {
      avatar: 'https://cdn.fakercloud.com/avatars/mwarkentin_128.jpg',
      name: 'Edwin 3',
      title: 'Customer Research Developer'
    },
  ]);
  
  // The second argument is the dependency that we want to watch.
  // If the second argument is set to [] the alert will showed once.
  // useEffect(() => {
  //   alert('Alert js')
  // }, [cards]);
  const buttonClasses = ['button']
  
  if (cards.length < 3) buttonClasses.push('pink-button');
  if (cards.length < 2) buttonClasses.push('red-button');
  
  const toggleCard = () => setShowCard(!showCard);
  
  const deleteCardHandler = (index)  => {
    const cards_copy = [...cards];
    cards_copy.splice(index, 1);
    setCards(cards_copy)
  }

  const changeNameHandler = (event, index) => {
    const cards_copy = [...cards];
    cards_copy[index].name = event.target.value;
    setCards(cards_copy);
  }

  return (
    <ThemeProvider theme={ theme }>
      <div className="App">
        <Button color="primary" length={ cards.length } >Show Hide</Button>
        <button className={ buttonClasses.join(' ') } onClick={ () => toggleCard() } style={{ 'margin': '1rem 0' } }>Show / Hide card</button>
        { showCard && (
        cards.map(({ avatar, name, title }, index) => 
          <Card key={ index }
            avatar={ avatar }
            name={ name }
            title={ title }
            onDelete={ () => deleteCardHandler(index) }
            onNameChanges={ event =>  changeNameHandler(event, index)}
          />)
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
