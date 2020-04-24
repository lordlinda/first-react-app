import React from "react"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

//this component contains the cards with the transactions under the tabs 
//they are actually linked by the category
//i am talking about the tabs and the info on cards
class Transactions extends React.Component {
    render() {
        //picking out what we need from props
        const { transactions, category, onDelete } = this.props

        return (
            <div>
             {/*the transactions rememeber carry a certain structure
             // //like this [Array(2),Array(2)]
             // ehich means the first parameter is the type and the next is the array containing 
             // transactions */}
             {
              transactions.map(([type,transactions])=>{
               //in this case we want to ensure that our tabs can pick
                //up on the specific category 
                //in this case of it being undefined is for all or if a tab is clicked and that category is equal to the type
                //this is what ensures that when i click on income or expense tab it shows only those 
                return !category || category ===type ?

                        <React.Fragment key={type}>
                      {/* so to display the data of a particular transaction,i have to map through the transactions only */}
                       {
                        transactions.map(transaction=>{
return <Card  variant="outlined" key={transaction.id} style={{marginTop:"20px"}}>
                <IconButton style={{float:"right"}} onClick={()=>onDelete(transaction.id)}>
                     <DeleteIcon />
                </IconButton>
                
                            <CardContent>
                              <Typography   gutterBottom variant="body1">
                                Amount :{transaction.amount}
                              </Typography>
                            
                              <Typography variant="body1" component="h2">
                               Category:{transaction.category}
                              </Typography>
                              <Typography   variant="body1">
                                Notes:{transaction.notes}
                              </Typography>
                              <Typography variant="body2" component="p" style={{color: transaction.type === "income" ? "green" :"red"}}>
                               {transaction.type}
                              </Typography>
                            </CardContent>
     
                      </Card>
   
                        })
                       }
                        </React.Fragment>
                        :null
              })
             }

             </div>
        )
    }
}
export default Transactions