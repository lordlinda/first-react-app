import React from "react"
import Top from "./Top.js"
import Bottom from "./Bottom.js"
class Main extends React.Component{
	render(){
		const {categories,onSelect,category,transactions} = this.props
		return (
<React.Fragment>
<Top transactions={transactions} />
<Bottom 
categories={categories} 
onSelect={onSelect} 
category={category}/>
</React.Fragment>
			)
	}
}
export default Main