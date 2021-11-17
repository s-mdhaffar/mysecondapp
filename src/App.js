import logo from './logo.svg';
import './App.css';
import ProfileName from './Component/Profile/ProfileName';
import ProfileAdress from './Component/Profile/ProfileAdress';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProfilePhoto/>
         <ProfileName/>
        </a>
        <ProfileAdress/>
      </header>
    </div>
  );
}

export default App;
