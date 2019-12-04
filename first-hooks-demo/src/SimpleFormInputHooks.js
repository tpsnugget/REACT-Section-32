import React from "react"
import useInputState from "./hooks/useInputState"

function SimpleFormInputHooks(){

   const [email, updateEmail, resetEmail] = useInputState("")

   return(
      <div>
         <h1>The Value is...{email}</h1>
         <input
            type="text"
            value={email}
            onChange={updateEmail}
         />
         <button onClick={resetEmail}>Submit</button>
      </div>
   )
}

export default SimpleFormInputHooks