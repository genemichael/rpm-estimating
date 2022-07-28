import { Container, 
    Row, 
    ButtonGroup,
    Button    
 } from 'reactstrap'

const SaveContinue = () => {
   return( <Row>
         
         <div className='d-flex justify-content-end'>
     
             <ButtonGroup className='btn-group'>
                 <Button 
                     outline
                     color='primary'
                     id='saveButton'
                     >Save & Continue
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

export default SaveContinue