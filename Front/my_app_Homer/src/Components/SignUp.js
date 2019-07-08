import React, {Component} from 'react';

export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: ""
        };
        
        this.updateEmailField = this.updateEmailField.bind(this);
      }

        updateEmailField(e) {
          /*const{value, email} = e.target;*/
          this.setState({
            value: e.target.value
          })
        }
    
  render() {
    return(
    <div>
      <h1>
        {this.state.value}
      </h1>
      <input 
      type='email' 
      name = 'email' 
      onChange = {this.updateEmailField} 
      />
       
    </div>
    );
  }
}