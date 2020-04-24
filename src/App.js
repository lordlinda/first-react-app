import React from 'react';
import Header from "./components/header/Header.js"
import Main from "./components/Layout/Main.js"
import {categories,transactions} from "./Store.js"
import Layout from "./components/Transactions/Layout.js"
class App extends React.Component{
	//the state contains the transactions from the store and 
	//category selected which can be income or expense
	//and the transaction to be added which is in the tabs
	state ={
		transactions,
		category:"",
		transaction:{}
	}
	//this function ensures that each tab has its own category
	//so for each tab we assign a category from the categories using an index as 
	//seen in the file Bottom.js
	handleCategorySelected = (categories)=> 
	this.setState({
		category : categories
	})

	getTransactionsByCategory(){
		
	return 	this.state.transactions.reduce((transactions,transaction)=>{
			//this reduce function returns each transactionas an independent object
			//this function is going to assign all transactions according to type
			//that is income or expense
			//so first we pick out the type from each transcation which using destructing
			const {type} = transaction
			//next we try to categories all the data according to type
			//this next line ensures each item has a type if not the type is given as undefined
			//like this{income:Array(5),expense:Array(4),undefined:Array(1)}
			//because the number of transactions are ten
			transactions[type] = transactions[type]	? 
          //if they all have type we spread the  object for each type to get
          //all its transactions
          //like this{income:Array(5),expense:Array(5)}			//like this{income:Array(5),expense:Array(4),undefined:Array(1)}
			//like this{income:Array(5),expense:Array(4),undefined:Array(1)}
			[...transactions[type],transaction]
			:[transaction]
            //we return the transactions in their categories way
         	return transactions

		},{})
	}
	//this is the function that adds the a new item to the transactions
	//i pick this new item from the Form.js file as a trnsaction which is seen
	//as a parameter in the function and then i add to the top of the transactions
	//array using the spread operator 
	//however this only adds one item per go
	//as you will see that the previous item added is replaced by the new item added
	handleNewTransaction = (transaction) =>{
		this.setState((state)=>({
			transactions : [
			transaction,
			...transactions
			]
		}))
	}

//this function deletes one transaction at a time by picking the id from 
//the transactions.js file and this function filters through the entire transactions array
//and picks returns all transactions whose id is not equal to that id
   deleteSelectedTransaction = (id) =>{
   	this.setState((state)=>({
   		transactions : state.transactions.filter(transaction => transaction.id !== id)
   	}))
   }
   

 render(){
 	 	const transactions = Object.entries(this.getTransactionsByCategory())
 	//object.entries enables us to convert our object to an array
 	//like this [Array(2),Array(2)]
 	///the first array has the first item as the transaction type and the other item as the array of items
 	//console.log(transactions)
 	


 	//destructing and picking category and transaction from the state
const {category,transaction} = this.state
//they are then passed in these components as seen fit
  return (
  	<React.Fragment >
  	<div >
   <Header 
   transaction ={transaction}
   onSubmit={this.handleNewTransaction} />
    <Main  
    transactions={this.state.transactions}
    categories ={categories} 
    onSelect ={this.handleCategorySelected} 
    category={category}/>
    <Layout
    
    onEdit={this.editSelectedTransaction}
    onDelete ={this.deleteSelectedTransaction}
    category ={category}
    transactions={transactions}/>
    </div>
    </React.Fragment>
    )
 }
}

export default App;
