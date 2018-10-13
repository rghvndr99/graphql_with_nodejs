import React, { Component } from "react";
import {GetActivity} from "./services.js";
class Main extends Component {
    constructor(props){
        super(props);
      this.state={
        userList:[]
      }
    }
 async componentDidMount(){
  let userList= await GetActivity();
   this.setState({
    userList
   })
  }
  render() {
    const userdatamap=this.state.userList?this.state.userList:[];
    const listOfUser=userdatamap.map((item)=><li key={item._id}>{item.name}</li>)
         return(
          <div>
            <ul>{listOfUser}</ul>
         </div>
    )
  }
}
export default Main;