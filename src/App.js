import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Bio from "./Pages/Bio";
import Home from "./Pages/Home";
import Media from "./Pages/Media";
import Contact from "./Pages/Contact";
import TrainYou from "./Pages/TrainYou";
import './global.scss'

function App() {
  return (
      <HashRouter>
        <div className="app">
          <header className="app__header">
            <nav className='nav'>
              <div className='nav__logo'>Ruqsana Begum</div>
              <div className='nav__inner'>
                <NavLink className='nav__link' activeClassName="nav__link--selected" to="/" exact>Home</NavLink>
                <NavLink className='nav__link' activeClassName="nav__link--selected" to="/train-you">Train You</NavLink>
                <NavLink className='nav__link' activeClassName="nav__link--selected" to="/bio">Bio</NavLink>
                <NavLink className='nav__link' activeClassName="nav__link--selected" to="/media">Media</NavLink>
                <NavLink className='nav__link' activeClassName="nav__link--selected" to="/contact">Contact</NavLink>
              </div>
            </nav>
          </header>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/train-you" component={TrainYou}/>
            <Route path="/bio" component={Bio}/>
            <Route path="/media" component={Media}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
