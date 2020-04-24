import React from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles ={
  //this margin makes it perfectly centered for me
  //however any adjustments can be done to it to ensure 
  //any desrirable effect
  margin:"80px 10px 80px 320px",
  //the width is big enough to accomodate all numbers
	width:"300px",
  //the height is also good acoording to me to accomodate 
  //my desired eefect
	height:"70px",
   fontSize:"50px",
}
//this components conations just values that is total income and total expenses and the balalnce
class Top extends React.Component{
  //this function is what gives commas separators after three numbers
    numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
 	render(){
 		//here the transactions are not divided according to their types
 		//they are organised as they were picked form the store because the arrays that were sorted 
 		//were a bit crazy for me but that way is possible too
 		const {transactions} = this.props
 		//this is calculating total income
 		//first from the transactions.i filter out those with type of income
 		//giving me an array of five objects 
 		//which i then loop through using the map method to get the object from which i pick 
 		//the amount to return an array which i add up to get a single value
    ////while using the reduce function the 0 acts an initial value for reduction incase of you have deleted everything to give
    ///a total of zero
        const totalIncome = transactions.filter(transaction =>
        	transaction.type === "income").map(item =>item.amount).reduce((acc,cur)=> acc+ cur,0)
         //first from the transactions.i filter out those with type of expense
 		//giving me an array of five objects 
 		//which i then loop through using the map method to get the object from which i pick 
 		//the amount to return an array which i add up to get a single value
    ////while using the reduce function the 0 acts an initial value for reduction incase of you have deleted everything to give
    ///a total of zero
      const totalExpenses = transactions.filter(transaction =>
        	transaction.type === "expense").map(item =>item.amount).reduce((acc,cur)=> acc+ cur,0)
         //subtracting totalExpense from the totalIncome to get balance which is dsiplayed in the center of the app
      const balance = totalIncome - totalExpenses
 


       // console.log(amounts)
		return (
			<div >
     
        <Typography component="div" style={styles} >
         <div style={{color:balance < 0 ? "red" :"green"}}>

       {/*i run each value through the function here to get commas*/}
         {
          this.numberWithCommas(balance)
         }
         </div>
        </Typography>
       {/* //the values of totalIncome and totalExpense are in a grid system such that they lie side bys side
        //instaed of on top of one another */}
        <Grid container spacing={5}>
        <Grid item xs={6} md={6} lg={6}>
       <Typography style={{color:"green"}}>
     {/*i run each value through the function here to get commas*/}
        Total Income : {this.numberWithCommas(totalIncome)}
       </Typography>
       </Grid>
       <Grid item xs={6} md={6} lg={6}>
        <Typography style={{color:"red"}}>
      {/*i run each value through the function here to get commas*/}
        Total Expense : {this.numberWithCommas(totalExpenses)}
       </Typography>
       </Grid>
       </Grid>
      
      </div>

			)
	}
}
export default Top