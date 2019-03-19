import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideMenu from '../SideMenu';
import UserManagement from '../UserManagement';
import GE_Generate from '../GE_Generate';
import GE_Params from '../GE_Parameters';
import GE_Gen from '../GE_Generate';

class Layout extends React.Component {
  
  constructor() {
    super();
    this.state = {
      option: ""
    };
}

  render() {

    console.log(this.state.openKeys);
    return (
          <div>
            
            <Toolbar />
            <main style={{marginTop: '64px'}}>
              <div style={{display: 'flex'}}>
                <SideMenu data={this.state.option}/>
                <UserManagement />
              </div>

              
            </main>
          </div>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);

export default Layout;