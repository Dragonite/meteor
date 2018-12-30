import React, { PureComponent } from 'react';
import logo from './snowflake.svg';
import githubwhite from './githubwhite.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import './Site.css';

class Site extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />    
        </div>
        <div className="App-body">
          <a href="https://github.com/Dragonite"><img src={githubwhite}/></a>
          <a href="https://www.linkedin.com/in/haolin-wu-222188160/"><img src={linkedin}/></a>
          <a href="https://www.instagram.com/haolin_wu/"><img src={instagram}/></a>
        </div>

      </div>
    );
  }
}
export default Site;
