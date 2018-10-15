import React, { Component } from "react";
import InputField from "./inputField.js";
class UpdateUser extends Component {
    constructor(props){
        super(props);
        this.submitFormAction=this.submitFormAction.bind(this);
        this.onChangehandler=this.onChangehandler.bind(this);
        const prp=this.props.userObj;
        this.state=prp
      }
   submitFormAction(e){
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
          <React.Fragment>
           <form>
           {inputfield}
           <input type="button" onClick={this.submitFormAction} value="update" />
           </form>
         </React.Fragment>

    )
  }
}
export default UpdateUser;