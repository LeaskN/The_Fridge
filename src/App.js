import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Preferences from './Components/Preferences/Preferences.js'

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;