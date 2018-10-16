import React, { Component } from "react";
import {GetActivity,UpdateActivity} from "./services.js";
import ListUser from "./ListUser.js";
import UpdateUser from "./UpdateUser.js";
import './app.css';
import {AppBar,Toolbar,Typography,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';
class Main extends Component {
    constructor(props){
        super(props);
      this.state={
        userList:[],
        userObj:{}
      }
      this.undateUser=this.undateUser.bind(this);
      this.submitHandler=this.submitHandler.bind(this);
      this.closeModelBox=this.closeModelBox.bind(this);
      }
 async componentDidMount(){
  let userList= await GetActivity();
   this.setState({
     userList
   })
  };
  async submitHandler(obj){
      let userList=await UpdateActivity(obj);
      this.setState({
        userList,
        userObj:{}
      })
  };
  undateUser(userObj){
        this.setState({userObj});
  };
  closeModelBox(){
    this.setState({
        userObj:{}
      })
  }

  render() {
    const {userObj,userList}=this.state;
    const isUpdated=Object.keys(userObj).length>0?true:false;
    const userdatamap=userList?userList:[];
    const listOfUser=userdatamap.map((item)=><ListUser updateUserHandler={this.undateUser} key={item._id} item={item}/>)
         return(
          <div>
               <div className="header">
                <AppBar position="static" color="secondary">
                  <Toolbar>
                    <Typography variant="h6" color="inherit">
                       Employee List
                    </Typography>
                  </Toolbar>
                </AppBar>
              </div>
            <div>{listOfUser}</div>
            { isUpdated &&
               <UpdateUser userObj={userObj} isOpen={isUpdated} closeModal={this.closeModelBox} submitaction={this.submitHandler}/>

            }
         </div>
    )
  }
}
export default Main;