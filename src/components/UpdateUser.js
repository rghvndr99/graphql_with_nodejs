import React, { Component } from "react";
import InputField from "./inputField.js";
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';
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
    const {userObj,submitaction,closeModal,isOpen}=this.props;
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
          <Dialog
              onClose={closeModal}
              open={isOpen}
              aria-labelledby="form-dialog-title"
           >
          <DialogTitle id="form-dialog-title">Update</DialogTitle>
          <DialogContent>
                       <form className="container">
           {inputfield}

           </form>


          </DialogContent>
          <DialogActions>
            <Button  size="large" color="primary"  onClick={()=>this.submitFormAction()}>Update</Button>
            <Button onClick={closeModal} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        )
  }
}
export default UpdateUser;