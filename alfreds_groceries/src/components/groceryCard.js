import * as React from "react"
import { getGrocery,  saveGrocery} from "../client/dynamoDB";
import "../styles/GroceryCard.css"
import icon from "../images/icon.png"


class GroceryCard extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            stock:{}
        }
    }

    componentDidMount(){
        getGrocery("chicken").then((result)=>
            {
                this.setState({
                    stock: result
                })
            })
    }


    render(){
        return(<div>
           


           <div class="card">
  <div class="container">
      <img src={icon} />
    <h1><b>{this.state.stock.itemName}</b></h1>
    
           <h4>{this.state.stock.itemAmount}</h4>
           <h4>{this.state.stock.itemExpiration}</h4>
  </div>
</div> 
        </div>)
    }
}

export default GroceryCard