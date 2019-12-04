import React from "react"
import useToggle from "./hooks/useToggle"

function Toggler() {

   const [isHappy, toggleIsHappy] = useToggle(true)
   const [isHeartBroken, toggleIsHeartBroken] = useToggle(false)

   return (
      <div>
         <h1>{isHappy ? "😃" : "🙁"}</h1>
         <button onClick={toggleIsHappy}>Change Me</button>
         <h1>{isHeartBroken ? "💔" : "❤️"}</h1>
         <button onClick={toggleIsHeartBroken}>Change Me</button>
      </div>
   )
}

export default Toggler