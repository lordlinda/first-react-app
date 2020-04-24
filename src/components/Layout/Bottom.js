import React from "react"
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//this components holds the tabs which contain each of our transactions
class Bottom extends React.Component{

	render(){
		const {categories,onSelect,category } = this.props
		//console.log(categories)
    
    //since materialui takes the value as an index we have to convert the position of each category in categories as
    //an index
		//so to be able to click on each of the tabs we have out tabs value as index
		//so we have a category in App state which we carry down to this file
		//then we write a ternary operator that the value of index of each category is equal to the index of the category plus one
		//to cater for the all tab
    //so we begin by saying is there an index 
    //it is going to exist on clicking one of the tabs 
      const index = category ? 
      //here we are finding the index of each of the categories 
      //since they are two i.e ["income","expense"]
      //the indices would be [0,1] but to each index we add 1
      // cater for the all tabs
      ////this line of code below is finding the index of all values in the categories array because to act as the index value
      ///however we have an all tab to cater for both income and expenses
      ///so we ensure that all index got are increased by one cater for the all tab
      categories.findIndex(group => group === category) + 1
      //if the catgory is not income or expense  it has index of zero which is the all tab
      : 0

	
		return (
             <Paper square>
  <Tabs
  //now this is going to the value here
    value={index}
    indicatorColor="primary"
    textColor="primary"
    variant="fullWidth"
   onChange={(e,index) =>{
    //if the index is 0 that is all tabs an empty string
    //if it is not zero,get index of it on which we added one and subtract one to get true index
    ////to reverse adding one ingetting index
   onSelect(index === 0 ? "": categories[index - 1])
   }}
  >
    <Tab label="All Transactions" />

    {/*//we brought in the categories and  we loop through them to get tab headings
    //the key prop in necessary to avoid getting an error 
    //it just has to be unique for each category which is why since each category is unique 
    //it can act as a key
    //it is not a number specifically */}
    {
    	categories.map(category =>{
    		return  <Tab label= {category} key={category}/>
    	})
    }

    
  </Tabs>
      

</Paper>

			)
	}
}
export default Bottom