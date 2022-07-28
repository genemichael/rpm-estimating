import React from 'react'
import { Container, 
    Row, 
    ButtonGroup,
    Button    
 } from 'reactstrap'


   

const SaveAddClear = () => {
    const addAnother = () =>{};
  return( <Row>
         
    <div className='d-flex justify-content-end'>

        <ButtonGroup className='btn-group'>
            <Button 
                outline
                color='primary'
                id='saveButton'
                >Save
            </Button>
            <Button
            outline
            color='warning'
            id='addAnother'
            onClick={addAnother}>
                Add Another
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

export default SaveAddClear