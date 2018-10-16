import React, { Component } from "react";

import {Input} from '@material-ui/core';
class InputField extends Component {
    constructor(props){
        super(props);
          }
  render() {
    const {userObj,index,disabled,changeHandler}=this.props;
    return(
          <React.Fragment>
            <Input
                defaultValue={userObj[index]}
                className="input-margin"
                label={index}
                id={index}
                disabled={disabled}
                onChange={(e)=>changeHandler(e)}
             />
        </React.Fragment>

    )
  }
}
export default InputField;