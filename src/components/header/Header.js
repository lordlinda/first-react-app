import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from "../Layout/Form.js"
class Header extends React.Component{
 
  
	render(){
   const {onSubmit,transaction} = this.props
		return (
           <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" style={{flex:1}}>
            Pasbanc
          </Typography>
         <Form 
         transaction ={transaction}
         onSubmit={onSubmit} />
        </Toolbar>
      </AppBar>

			)
	}
}
export default Header