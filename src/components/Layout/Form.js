import React from "react"
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//this component is what picks  the data that goes as a new transaction
class Form extends React.Component{
	state = {	
	open:false,
   transaction :{
	amount:"",
	type:"",
	category:"",
	notes:""
		}
	}
  //this function picks the values passes in the function for each text field 
  //and captures them as name and matches them to the corresponding event values
	handleChange = name => e =>{
		this.setState({
      //since theses values are nested in the transaction object it is important to 
      //first spread them
			transaction :{
        ...this.state.transaction,
		[name] : e.target.value
			}
		})
		
	}
	
  //this handles the closing an opening of the form
handleToggle=()=>{
	this.setState({
		open:!this.state.open
	})
		}
    //this is the function that handles the transaction created and passes
    //it the App.js to be added to the transactions array
    //it happens on clickin the add button at hte bottom of the form
handleTransaction =() =>{
//first we close the form
	this.handleToggle();
  //we  spread out the array for two things
  //1.to convert the amount to a number as it is captured is string form
  //trust me the type number of the text fiels does not work
  //2.to add AN ID
  //REMEMBER IT ONLY ADDS ONE OBJECT SO THE ID CAN REMIAN THE SAME ONLY IN THIS CASE
	this.props.onSubmit({
		...this.state.transaction,
		amount:parseInt(this.state.transaction.amount),
		id:11
	})
  //this then re-initialises the form removing the previous values
	this.setState({
  transaction :{
	amount:"",
	type:"",
	category:"",
	notes:""
		}
	})
}
	
	render(){
    //passing in necessary props using destructuring
		const {transaction:{amount,category,notes},open}  = this.state

return <form>
{/*//this is the button in the appbar which you click to show the form using handleToggle function */}
  <Fab color="secondary" aria-label="add" size="small"onClick={this.handleToggle}>
        <AddIcon />
   </Fab>


  <Dialog 
  open={open}
  onClose ={this.handleToggle}
  onChange ={this.handleDialog} >
        <DialogTitle >Create </DialogTitle>
        <DialogContent> 
         <FormControl >
      <FormLabel component="legend">Transaction Type</FormLabel>
      <RadioGroup  onChange={this.handleChange("type")}>
        <FormControlLabel value="income" control={<Radio />} label="income" />
        <FormControlLabel value="expense" control={<Radio />} label="expense" />
      </RadioGroup>
    </FormControl>
           <TextField
            autoFocus
            margin="dense"
            label="Amount"
            type="number"
            value={amount}
            fullWidth
            onChange ={this.handleChange("amount")}
          />
           <TextField
            autoFocus
            margin="dense"
            label="Category"
            type="text"
            value={category}
            fullWidth
            onChange ={this.handleChange("category")}
          />
           <TextField
            autoFocus
            margin="dense"
            label="Notes"
            type="text"
            value={notes}
            fullWidth
            multiline
            onChange ={this.handleChange("notes")}
          />
        </DialogContent>
        <DialogActions>
          <Button  color="primary" onClick={this.handleTransaction}>
            Add
          </Button>
          
        </DialogActions>
      </Dialog>
      </form>
	}
}


export default Form