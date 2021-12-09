import * as React from "react"
import MyForm from "../components/myForm"
import GroceryCard from "../components/groceryCard"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",

}


class IndexPage extends React.Component{
  render(){
    return(
      <div>
        <MyForm></MyForm>
        <GroceryCard></GroceryCard>
      </div>
    )
  }
}

export default IndexPage
