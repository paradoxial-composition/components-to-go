import React from 'react'
import { Card,Avatar } from 'antd';
import './LoginInfo.css';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Item>
        <a target="_self" rel="noopener noreferrer" href="/login">Logout</a>
      </Menu.Item>
    </Menu>
  );

const loginInfo = props => (
    <div className="LoginInfo__items">
        <div>
            <label>EL BANI Othman</label>
            <br></br>
            <label>Intern</label>
        </div>
        <div className="LoginInfo__avatar">
            
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                <Avatar icon="user" /><Icon type="down" />
                </a>
            </Dropdown>
            
        </div>
    </div>
);

export default loginInfo;