import React, {Component} from 'react';

export default class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password:"",
            verificationp:"",
            firstname:"",
            lastname:"",
        }

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      };
    
      

        onChange(e) {
          const{value, name} = e.target;
          this.setState({
            [name]: value
          })
          console.log(this.state);
        }

        submitForm(e){
          e.preventDefault();
        }
      
    

  render() {
    return(
    <div>
      <h1>
        {this.state.value}
      </h1>
    
    <div className = "FormHommer">
      
    <form  onSubmit={this.submitForm}>
      <fieldset>
       <div className="form-data" >
         <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name = "email"
          onChange = {this.onChange}
          value= {this.state.email} 
          />
      </div>
      <div className="form-data">
        <label htmlFor>Password</label>
        <input
        type= "password"
        id= "password"
        name= "password"
        onChange = {this.onChange}
        value= {this.state.password}
        />
      </div>
      <div className = "form-data">
        <label htmlFor>Verification password</label>
        <input
        type= "password"
        id="verificationp"
        name= "verificationp"
        onChange = {this.onChange}
        value = {this.state.verificationp}
        />
      </div>
      <div className= "form-data">
        <label htmlFor>First Name</label>
        <input
        type= "text"
        id="firstname"
        name= "firstname"
        onChange = {this.onChange}
        value = {this.state.firstname}
        />
      </div>
      <div className= "form-data">
        <label htmlFor>Last Name</label>
        <input
        type="text"
        id="lastname"
        name="lastname"
        onChange= {this.onChange}
        value= {this.state.lastname}
        />
      </div>

      <div className ="form-data">
        <input type="submit" value="Send" />
      </div>

    </fieldset>
  </form>
</div> 
</div>
    );
  }
}