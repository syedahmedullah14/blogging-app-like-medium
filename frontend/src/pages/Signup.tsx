// export import React from 'react'

import Auth from "../components/Auth"
import Quotes from "../components/Quotes"

export const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <Auth/>
        </div>
        <div className="invisible md:visible">
          <Quotes/>
        </div>
   
      </div>
        
    </div>
  )
}

export default Signup