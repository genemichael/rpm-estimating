import React from 'react'
import { Input } from 'reactstrap'

const VendorService = () => {
  const startingIndex = 1+Math.random()
  return (
    <>
    if(item=="Vendor Service"){
        <td key={startingIndex+Math.random()+1}>
            <Input 
            type='text'
            id={'vendorService'+Math.random()}
            placeholder='Duration in days'/>
        </td>
    } 
    
  </>
  )
}

export default VendorService