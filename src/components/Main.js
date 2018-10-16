import React, { Component } from "react";
import {GetActivity,UpdateActivity,deleteUser,addUser} from "./services.js";
import ListUser from "./ListUser.js";
import UpdateUser from "./UpdateUser.js";
import './app.css';
import {AppBar,Toolbar,Typography,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
class Main extends Component {
    constructor(props){
        super(props);
      this.state={
        userList:[],
        userObj:{},
        isadduser:false
      }
      this.undateUser=this.undateUser.bind(this);
      this.submitHandler=this.submitHandler.bind(this);
      this.closeModelBox=this.closeModelBox.bind(this);
      this.deleteUserHandler=this.deleteUserHandler.bind(this);
      this.addUserHandler=this.addUserHandler.bind(this);
      this.adduserBtnClick=this.adduserBtnClick.bind(this);
      this.adduserProps={
            name:'',
             email:'',
             address:'',
             company:''
         }

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
        userObj:{},
        isadduser:false
      })
  };
  async deleteUserHandler(obj){
    let userList=await deleteUser(obj);
    this.setState({
     userList
   });
  }
  async addUserHandler(obj){
    let userList=await addUser(obj);
    this.setState({
     userList,
     userObj:{},
     isadduser:false
   });
  }
  adduserBtnClick (){
    this.setState({
       isadduser:true,
       userObj:this.adduserProps
     });
    console.log('RDX' +this.state.isadduser);
  }
  undateUser(userObj){
        this.setState({userObj});
  };
  closeModelBox(){
    this.setState({
        userObj:{},
        isadduser:false
      })
  };

  render() {
    const {userObj,userList,isadduser}=this.state;
    const isUpdated=Object.keys(userObj).length>0?true:false;
    let modalDialog=null;
    if(isUpdated || isadduser){
      modalDialog= <UpdateUser
                     isadduser={isadduser}
                     userObj={userObj}
                     isOpen={isUpdated}
                     closeModal={this.closeModelBox}
                     updateaction={this.submitHandler}
                     addaction={this.addUserHandler}
                     />
    }
        const userdatamap=userList?userList:[];
    const listOfUser=userdatamap.map((item)=><ListUser deleteUserHandler={this.deleteUserHandler} updateUserHandler={this.undateUser} key={item._id} item={item}/>)
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
            {modalDialog}
            <Button variant="fab" color="secondary" aria-label="Add" className="add-user-btn" onClick={this.adduserBtnClick}>
                <AddIcon />
           </Button>
         </div>
    )
  }
}
export default Main;