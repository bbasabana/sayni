import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../../../styles/Menu.css';
import logo from './../../../assets/logoa.png';
import person from './../../../assets/images/menu/person.svg';
import enterprise from './../../../assets/images/menu/enterprise.svg';
import photo from './../../../assets/images/menu/photo.svg';
import social from './../../../assets/images/menu/social.svg';
import design from './../../../assets/images/menu/design.svg';
import setup from './../../../assets/images/menu/setup.svg';

class Menu extends Component {
    render() {
      const { pathname } = this.props.location;
        return (
            <div className="home-menu">
              <div className="menu-logo pt-4">
                <a href=""><img src={logo} alt="logo"/><span className="text-white font-bold pl-2 pt-2 absolute">Beta</span></a>
              </div>
              <div className="menu-list">
                <div className="mb-8 left-menu">
                  <ul>
                    <li className="mb-3 lg:mb-2">
                        <Link to="/" className={`text-grey-darkest ${pathname==='/'?'active':''}`}>
                          <img src={person}/>
                          <span className="text-xl">Informations</span>
                        </Link>
                    </li>
                    <li className="mb-3 lg:mb-2">
                        <Link  to="/entreprise" className={`text-grey-darkest ${pathname==='/entreprise'?'active':''}`}>
                        <img src={enterprise}/>
                        <span>Enterprise</span>
                        </Link>
                    </li>
                    <li className="mb-3 lg:mb-2">
                        <Link to="/image" className={`text-grey-darkest ${pathname==='/image'?'active':''}`}>
                        <img src={photo}/>
                        <span>Image</span>
                        </Link>
                    </li>
                    <li className="mb-3 lg:mb-2">
                        <Link to="/social" className={`text-grey-darkest ${pathname==='/social'?'active':''}`}>
                        <img src={social}/>
                        <span>Social media</span>
                        </Link>
                    </li>
                    <li className="mb-3 lg:mb-2">
                        <Link to="/design" className={`text-grey-darkest ${pathname==='/design'?'active':''}`}>
                          <img src={design} />
                          <span>Design</span>
                        </Link>
                    </li>
                    <li className="mb-3 lg:mb-2">
                      <Link to="/installation" className={`text-grey-darkest ${pathname==='/installation'?'active':''}`}>
                          <img src={setup}/>
                          <span>Installation</span>
                      </Link>
                    </li>         
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}

export default Menu
