import styled, { css } from 'styled-components';

const Button = styled.button`
  ${ props =>
  props.color && css `
    background-color: ${ props => props.length > 2 ? props.theme[ props.color ] : props.length < 2 ? 'red' : 'pink' };
    `
  }
  border: 0;
  color: white;
  padding: .5rem 1rem;
`;

export default Button;