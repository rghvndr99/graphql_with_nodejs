import React, { Component } from "react";
import {GetActivity,UpdateActivity} from "./services.js";
import ListUser from "./ListUser.js";
import UpdateUser from "./UpdateUser.js";

class Main extends Component {
    constructor(props){
        super(props);
      this.state={
        userList:[],
        userObj:{}
      }
      this.undateUser=this.undateUser.bind(this);
      this.submitHandler=this.submitHandler.bind(this);
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
  undateUser(e){
    const {param}=e.target.dataset;
    this.setState({userObj:JSON.parse(param)});
  };

  render() {
    const {userObj,userList}=this.state;
    const isUpdated=Object.keys(userObj).length>0?true:false;
    const userdatamap=userList?userList:[];
    const listOfUser=userdatamap.map((item)=><ListUser updateUserHandler={this.undateUser} key={item._id} item={item}/>)
         return(
          <div>
            <ul>{listOfUser}</ul>
            { isUpdated &&
               <UpdateUser userObj={userObj} submitaction={this.submitHandler}/>

            }
         </div>
    )
  }
}
export default Main;