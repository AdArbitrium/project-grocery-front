import axios from "axios";

export async function getGrocery(item){
    var result = await axios
     .get(
       `https://msp7fb4rxk.execute-api.us-west-2.amazonaws.com/dev/grocery/${item}`
     )
     .then((response) => {
       return response.data
     });
   
     return result
}



export async function saveGrocery(grocery){
  var result = await axios
  .post(
      "https://msp7fb4rxk.execute-api.us-west-2.amazonaws.com/dev/grocery",{
        itemAmount: grocery.itemAmount,
        itemExpiration: grocery.itemExpiration,
        itemName: grocery.itemName
      })
      .then((response) => {
      return response.data
  })
  return result
}