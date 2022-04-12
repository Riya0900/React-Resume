import './App.css';

export default function FunIntro({name,location,email,phone}) {
    return (
      <>
      <div className="App">
        <div className="App-body">
          <h3>{name}</h3>
          <h4>{location}</h4>
          <h4>{phone}</h4>
          <a 
            className="App-link" 
            href="https://mail.google.com" target="_blank"
            rel="noopener noreferrer">{email}</a>
        </div>
        </div>
        <hr/>
      </>
    );
  }