import React from 'react';

import { Input } from 'antd';
import { Button } from 'antd';
import { Tabs } from 'antd';

import UserTab from '../UserTab';
import DepartmentTab from '../DepartmentTab';
import AddUser from '../UserMngmnt_AddUser';
import './UserManagement.css';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
const Search = Input.Search;

class UserManagement extends React.Component {


    constructor() {
        super();
        this.state = {
            Add: false,
            Modify: false
        };
    }
    handleAddClick = (e) => {
        e.preventDefault();
            if( this.state.Add) {
              this.setState({
                Add: false
            });
            } else {
              this.setState({
                Add: true
            });
            }
      };

      render () {
        const Add = this.state.Add;
        const Modify = this.state.Modify;
        if(Add) {
            return <AddUser data={this.state.Add}/>
        } else {
                return (
                    <div>
                    <div className="contentHeader">
                        <div><p>GESTION DES UTILISATEUR</p></div>
                        <div><Search
                            placeholder="Rechercher un utilisateur"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                            />
                        </div>
                        <div><Button type="primary" onClick={this.handleAddClick}>+ Ajouter un utilisateur</Button></div>
                    </div>
                    <div>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Departments" key="1"><DepartmentTab /></TabPane>
                        <TabPane tab="Users" key="2"><UserTab /></TabPane>
                        </Tabs>
                    </div>
                </div>
                );
      };
}
}
  

export default UserManagement;
