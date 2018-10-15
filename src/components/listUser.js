import React, { Component } from "react";
import {Card,CardActions,CardContent,Button,Toolbar,Typography,CardActionArea,CardMedia,Avatar} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './app.css';
class ListUser extends Component {
    constructor(props){
        super(props);
      }
   render() {
    const {item,updateUserHandler}=this.props;
      return(
         <Card className="card">
             <CardActionArea>
               <CardMedia>
                   <Avatar className="avatar" sizes="big">
                      <AssignmentIcon />
                  </Avatar>
               </CardMedia>
               <CardContent>
                <Typography variant="h5" component="h2" className="text-center">
                  {item.name}
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="text-center">
                <Button variant="outlined" size="small" color="secondary" data-param={JSON.stringify(item)} onClick={()=>updateUserHandler(item)}>Edit</Button>
              </CardActions>
          </Card>
      )
  }
}
export default ListUser;