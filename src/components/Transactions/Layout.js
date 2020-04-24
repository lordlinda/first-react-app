import React from "react"
import Grid from '@material-ui/core/Grid';
import Transactions from "./Transactions.js"
//this component just ensures that for particular sizes
//the boxes change size
//i could have put them right in transactions but that would overcrowd it
class Layout extends React.Component{
	render(){
		//this props just pass through to go to transactions
		const {transactions ,category,onDelete} = this.props
		return (
			<div >
			<Grid container spacing={3} >
			<Grid item xs={12} md={6} lg={6}>
<Transactions  

category={category} 
transactions={transactions} 
onDelete ={onDelete} 
/>
</Grid>
</Grid>
</div>
			)
	}
}
export default Layout