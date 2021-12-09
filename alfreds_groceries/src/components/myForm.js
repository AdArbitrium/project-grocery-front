import * as React from "react"
import { connect } from "react-redux";
import { setGrocery } from "../states/actionCreators";
import "../styles/myForm.css"
import { getGrocery,  saveGrocery} from "../client/dynamoDB";

const mapStateToProps = (state) =>{
    const{
        groceries,
    } = state;
    return {
        groceries,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setGrocery: (val) => dispatch(setGrocery(val)),
    }
}


class MyForm extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            itemName:"",
            itemExpiration:"",
            itemAmount:"",
        }
    }

    handleOnChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    handleFormSubmit = (event) => {
        event.preventDefault();
        var grocery = {
            itemName: this.state.itemName,
            itemExpiration: this.state.itemExpiration,
            itemAmount:this.state.itemAmount
        }
        this.props.setGrocery(grocery)
/*         getGrocery("chicken").then((result)=>{
           console.log(result)
            this.props.setGrocery(result)
          }) */
    }
    
    

    render(){
        return(<div className="bdr">
            <form onSubmit={this.handleFormSubmit} >
                <label >
                    Grocery Item:
                <input 
                    onChange = {this.handleOnChange}
                    name = "itemName"
               
                >
                </input>    
                </label>

                <label>
                    Grocery Expiration:
                <input 
                    onChange = {this.handleOnChange}
                    name = "itemExpiration"
                >
                </input>
                </label>

                <label>
                    Grocery Amount:
                <input 
                    onChange = {this.handleOnChange}
                    name = "itemAmount"
                >
                </input>
                </label>

                <button>
                    submit
                </button>
            </form>   
            
            <div >
               {this.props.groceries.itemName}
               <br></br>
               {this.props.groceries.itemExpiration}
               <br></br>
               {this.props.groceries.itemAmount}
            </div>


                {console.log(getGrocery("chicken"))}

        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyForm)