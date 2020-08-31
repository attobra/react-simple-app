import React from 'react'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Basics from './components/Basics'
import Types from './components/Types'
import Safety from './components/Safety'
import Equipment from './components/Equipment'
import Where from './components/Where'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
      <BrowserRouter>
    
    <div className="wrapper">
      <Header />
      
      <Sidebar />
      
      <Switch>
        <Route exact path="/" component={Basics} />
        <Route path="/types" component={Types} />
        <Route path="/safety" component={Safety} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/where" component={Where} />
      </Switch>

      <Footer />

    </div>
  </BrowserRouter>
    )
}

export default App
