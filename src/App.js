import React from 'react'
import './App.css'
import Basics from './components/Basics'
import Types from './components/Types'
import Safety from './components/Safety'
import Equipment from './components/Equipment'
import Where from './components/Where'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    return (
      <BrowserRouter>
    
    <div className="wrapper">
      <div className = "header">
        <h1>Climbing the Triangle</h1>
      </div>
      
      <div className="sidebar">
      <ul>
        <li>
          <Link to="/">The Basics</Link>
        </li>
        <li>
          <Link to="/types">Types of Climbing</Link>
        </li>
        <li>
          <Link to="/safety">Safety</Link>
        </li>
        <li>
          <Link to="/equipment">Equipment</Link>
        </li>
        <li>
          <Link to="/where">Where to Climb</Link>
        </li>
      </ul>
      </div>
      
      <Switch>
        <Route exact path="/" component={Basics} />
        <Route path="/types" component={Types} />
        <Route path="/safety" component={Safety} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/where" component={Where} />
      </Switch>

      <div className="footer">
		<p>A sample site by Sylvia Richardson</p>
	</div>
    </div>
  </BrowserRouter>
    )
}

export default App
