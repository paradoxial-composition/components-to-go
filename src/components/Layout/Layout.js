import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideMenu from '../SideMenu';

import RouterView from './router';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
          <div>
            
            <Toolbar />
            <main style={{marginTop: '64px'}}>
              <div style={{display: 'flex'}}>
                <SideMenu data={this.state.option}/>
                  <RouterView></RouterView>
                </div>
              
            </main>
          </div>
        </BrowserRouter>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);

export default Layout;