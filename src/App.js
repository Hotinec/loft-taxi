import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Map from './components/Map/Map.js';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
import Signup from './components/Signup/Signup.js';

const ROUTES = {
  login: (setRoute) => <Login setRoute={setRoute}/>,
  map: () => <Map/>,
  profile: () => <Profile/>,
  signup: (setRoute) => <Signup setRoute={setRoute}/>
};

function App() {
  const [route, setRoute] = useState("login");

  return (
    <div className="App">
      <header className="App__header">
        <Navigation 
          routes={Object.keys(ROUTES)}
          setRoute={setRoute}
        />
      </header>
      <section className="App__content">
        {ROUTES[route](setRoute)}
      </section>
    </div>
  );
}

export default App;
