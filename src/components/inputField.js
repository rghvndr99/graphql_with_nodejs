import React, { Component } from "react";
//import UpdateUser from "./UpdateUser.js";
class InputField extends Component {
    constructor(props){
        super(props);
          }
  render() {
    const {userObj,index,disabled,changeHandler}=this.props;
    return(
          <div>
            <input type="text" id={index} disabled={disabled} onChange={changeHandler} defaultValue={userObj[index]} />
         </div>

    )
  }
}
export default InputField;