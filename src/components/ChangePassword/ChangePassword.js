import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './ChangePassword.css';
import {
    Card, Form, Icon, Input, Button, Checkbox,
  } from 'antd';
//import auth from './auth/auth';
import { request } from 'https';

  class LoginForm extends React.Component {
    state = {
      password:'',
      redirect: false,
      
  }

    handleClick = event => {
      event.preventDefault();
      const UserEmail = this.props.location.pathname.split('/');

      const user = {
        email: UserEmail[2],
        password: this.state.password,
      };
      axios.post(`http://localhost:5000/validatePassword/` ,  user )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        this.setState({
          redirect: true
      });
    }


    render() {
     

      const { getFieldDecorator } = this.props.form;
      const redirect = this.state.redirect;
      if(redirect) {
        return <Redirect to="/login" />
            //Password Form
      } else {
            return (
              <div className="centered">
                <Card style={{ width: 300 }}>
                <Form onSubmit={this.handleSubmit} className="login-form">

                  <label>please type in your pwd:</label>
                  <Form.Item>
                      <Input type="password"  prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" onChange={(event) => this.setState({password:event.target.value} )} />
                   </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"
                    onClick={this.handleClick}
                    >
                      Confirm
                    </Button>
                  </Form.Item>
            </Form>
              </Card>
              </div>
              
            );
      }
    }
  }
  
  const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

  export default WrappedLoginForm;