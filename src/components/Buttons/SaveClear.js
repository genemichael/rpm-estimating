import React from 'react'
import { 
  Button,
  ButtonGroup,
  Row
 } from 'reactstrap'

const SaveClear = () => {
  return (
    <Row>
         
         <div className='d-flex justify-content-end'>
     
             <ButtonGroup className='btn-group'>
                 <Button 
                     outline
                     color='primary'
                     id='saveButton'
                     >Save
                 </Button>
                 
                 <Button
                 color='danger'
                 className='btn'
                 id='clearButton'>Clear</Button>
             </ButtonGroup>
             </div>
             </Row>
  )
}

export default SaveClear