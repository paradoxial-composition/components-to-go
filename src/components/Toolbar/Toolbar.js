import React from 'react';
import './Toolbar.css';
import LoginInfo from '../LoginInfo/LoginInfo';
import { Input } from 'antd';
import logo from '../../assets/innoveos.ico';

/* jshint ignore:start */
const Search = Input.Search;

const toolbar = props => (
        <header className="toolbar">    
            <nav className="toolbar__navigation">
                <div></div>
                <div><img src={logo} alt="inno logo"></img></div>
                <div className="toolbar__logo">Innoveos</div>
                <div className="toolbar_search-bar">
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
    />
                </div>
                
                <div className="toolbar_login-info">
                    <LoginInfo />
                </div>
            </nav>
        </header>
);

export default toolbar;