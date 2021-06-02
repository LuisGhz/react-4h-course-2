// import { useEffect, useState } from 'react';
import './index.css';

export const Card = props => {

  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const recordMouse = e => {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // }

  // console.log(`Mouse x: ${ x }`);
  // console.log(`Mouse y: ${ y }`);

  // useEffect(() => {
  //   window.addEventListener('mousemove', recordMouse);

  //   return () => {
  //     console.log('Card component clean up');
  //     window.removeEventListener('mousemove', recordMouse);
  //   }
  // }, [])

  return (
    <div className="card">
      <div className="container">
        <h4><b>{ props.name }</b></h4>
        <p>{ props.phone }</p>
        <p><input type="text" value={ props.name } onChange={ props.onNameChanges } /></p>
        <p className="center-text"><button className="button red-button" onClick={ () => props.onDelete() } >Delete</button></p>
        <div>{ props.children }</div>
      </div>
    </div>
  );
}