import { useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  //step 1: get the data
  // state(userData)
  const [user, setUser] = useState(null)
 
  const display = user && <Display user={user} />

  return (
    //this is called a inverse data flow where we pass the setUser as a prop
    <div>
      <Input setUser={setUser} />
    {display}
    </div>
  );
}

export default App;

//step 1: get the data
// state(userData), input, form, functionaility to retrieve the data

//step 2: display the data 

//Below is our components 
//app -> userdata (we are going to store the users data)
//input -> username(the user is going to input their own username)
//display userData (prop)

//stateful variables (what variables are going to change)
//1. user data
//2. username

//Notes
//you cannot take data from child and pass it to another child 
//condition rendering says that is something exists display it, if it doesn't it will not be displayed