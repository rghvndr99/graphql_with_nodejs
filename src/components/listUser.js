import React, { Component } from "react";
class ListUser extends Component {
    constructor(props){
        super(props);
      }
   render() {
    const {item,updateUserHandler}=this.props;
      return(
          <React.Fragment>
            <li>{item.name} <input type="button" data-param={JSON.stringify(item)} onClick={updateUserHandler} value="Edit"/></li>
           </React.Fragment>

    )
  }
}
export default ListUser;