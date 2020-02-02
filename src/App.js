import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Map } from './components/Map';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Profile } from './components/Profile';
import { AuthProvider, AuthContext } from './context/AuthContext'

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="App">
        {isLoggedIn && <Header className='header'/>}
        <section className="App__content">
          <Switch>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/map'} render={() => <Map/>}/>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/registration'} render={() => <Signup/>}/>
            <Redirect from={'/'} to={'login'}/>
          </Switch>
        </section>
      </div>
    </AuthProvider>
  );
}

export default App;
