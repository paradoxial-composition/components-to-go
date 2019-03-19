import React from 'react';
import {Input, Button, notification} from 'antd';
import axios from 'axios';
import { Redirect } from "react-router-dom";



class AddUser extends React.Component {
   state = {
       name:'',
       email:'',
       redirect: false,
   }

   handleClick = event => {
       event.preventDefault();

       const user = {
         name: this.state.name,
         email: this.state.email,
       };
       console.log(user);
       axios.post(`http://localhost:5000/welcome/addUser`,  user )
         .then(res => {
           console.log(res);
           console.log(res.data);
         })

         this.setState({
            redirect: true
         });

         //notif
         notification.open({
            message: 'User Added Successfully',
            description: 'Your user has been added',
            
          })

     }

   render () {
       //console.log(this.state.Add);
       const redirect = this.state.redirect;

       if ( redirect ) {
        return <Redirect to="/welcome" />
       } else {
       return (
           <div>
               <div>
                   <p>Add User Content</p>
               </div>
               <div>
                   <Input name="name" placeholder="Enter your name" onChange={(event) => this.setState({name:event.target.value} )} />
                   <Input name="email" placeholder="Enter your email address"  onChange={(event) => this.setState({email:event.target.value} )}/>
               </div>
               <div>
                   <Button type="primary" onClick={this.handleClick}>Add user</Button>
               </div>
           </div>
       );
       }
   };
}

export default AddUser;