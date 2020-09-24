import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to='/ericparkportfolio/'>Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/ericparkportfolio/portfolio'>Portfolio</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/ericparkportfolio/contact'>Contact</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/ericparkportfolio" component={Home} />
          <Route path="/ericparkportfolio/portfolio" component={Portfolio} />
          <Route path="/ericparkportfolio/contact" component={Contact} />
        </Switch>
      </div>

      <footer className="fixed-bottom">     
    
      <Navbar color="dark" light expand="md">

            <Nav className="mr-auto" navbar>
              <NavItem>
                
              </NavItem>
            </Nav>
        </Navbar>

      </footer>

    </Router>
  )
}

export default App
