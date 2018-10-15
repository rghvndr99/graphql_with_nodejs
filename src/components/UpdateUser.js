import React, { Component } from "react";
import InputField from "./inputField.js";
import {Button} from '@material-ui/core';
class UpdateUser extends Component {
    constructor(props){
        super(props);
        this.submitFormAction=this.submitFormAction.bind(this);
        this.onChangehandler=this.onChangehandler.bind(this);
        const prp=this.props.userObj;
        this.state=prp
      }
   submitFormAction(){
    const obj=this.state;
     this.props.submitaction(obj);
   }
   onChangehandler(e){
      const element=e.target;
      this.setState({
          [element.id.trim()]:element.value
      })
   }
  render() {
    const {userObj,submitaction}=this.props;
    const inputfield=[];
    for(let props in userObj){
      let disabled=props=="_id"?true:false;
       inputfield.push(
                       <InputField
                          userObj={userObj}
                          key={props}
                          index={props}
                          disabled={disabled} changeHandler={this.onChangehandler}/>
                       );
    }
    return(
          <div className="container">
           {inputfield}
            <Button variant="outlined" size="large" color="secondary"  onClick={()=>this.submitFormAction()}>Update</Button>
           </div>
        )
  }
}
export default UpdateUser;