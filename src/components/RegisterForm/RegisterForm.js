import React from 'react';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
import LoginForm from '../LoginForm';
  /* jshint ignore:start */
  class RegisterForm extends React.Component {

    constructor() {
      super();
      this.state = {
          redirect: false,
          email: '',
          password: ''
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log('reload ....')
  }


  handleClick = (e) => {
    e.preventDefault();
    if( this.state.signup) {
      this.setState({
        redirect: false
    });
    } else {
      this.setState({
        redirect: true
    });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //add regiration back communication logic here

  };

  

    render() {

      const { getFieldDecorator } = this.props.form;

      const redirect = this.state.redirect;
      const forgot = this.state.forgot;

      if(redirect) {
        //redirection ex: return <Redirect to="/login/login" />
          return <LoginForm />
    } else {
            //register Form
            return (
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={(event) => this.setState({email:event.target.value} )} />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" onChange={(event) => this.setState({password:event.target.value} )} />
                  )}
                </Form.Item>
                <Form.Item>
                  <a className="login-form-forgot" onClick={this.handleClick}>Cancel</a>
                  <Button type="primary" htmlType="submit" className="login-form-button"
                  
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            );
            
    }
  }
}
  
  const WrappedLoginForm = Form.create({ name: 'normal_login' })(RegisterForm);

  export default WrappedLoginForm;