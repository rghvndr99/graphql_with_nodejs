import React, { Component } from "react";
import {Card,CardActions,CardContent,Button,Toolbar,Typography,CardActionArea,CardMedia,Avatar} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './app.css';
class ListUser extends Component {
    constructor(props){
        super(props);
      }
   render() {
    const {item,updateUserHandler,deleteUserHandler}=this.props;
      return(
         <Card className="card">
             <CardActionArea>
               <CardMedia>
                   <Avatar className="avatar" sizes="big">
                      <AssignmentIcon />
                  </Avatar>
               </CardMedia>
               <CardContent>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography className="card-position" color="textSecondary">
                    Organization-{item.company}
                 </Typography>
                 <Typography className="card-position" color="textSecondary">
                    address-{item.address}
                 </Typography>
                 <Typography className="card-position" component="p">
                    Email-{item.email}
                 </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="text-center">
                <Button size="small" color="secondary" onClick={()=>updateUserHandler(item)}>Edit</Button>
                <Button size="small" color="secondary" onClick={()=>deleteUserHandler(item)}>Delete</Button>
              </CardActions>
          </Card>
      )
  }
}
export default ListUser;