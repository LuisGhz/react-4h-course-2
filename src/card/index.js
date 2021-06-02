import './index.css';

export const Card = props => {
  return (
    <div className="card">
      <img src={`${ props.avatar }`} alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4><b>{ props.name }</b></h4>
        <p>{ props.title }</p>
        <p><input type="text" value={ props.name } onChange={ props.onNameChanges } /></p>
        <p className="center-text"><button className="button button-red" onClick={ () => props.onDelete() } >Delete</button></p>
        <div>{ props.children }</div>
      </div>
    </div>
  );
}