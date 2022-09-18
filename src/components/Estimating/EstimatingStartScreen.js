import React, { useState } from 'react'
import { 
    Container, 
    Row,
    Col,
    Button,
    ButtonGroup,
    Input,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Label
 } from 'reactstrap'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'


const EstimatingStartScreen = () => {
    const [isCopy, setIsCopy] = useState(false)
    const toggle = () => setIsCopy(current => !current)
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const getAQuoteNumber = () => {
        
            google.script.run.withSuccessHandler(loadNumber).newEstimateNumber();
            alert("click");
          }
          function loadNumber(newNumber) {
            document.getElementById("estNumber").value = "D" + newNumber;
            alert("D" + newNumber);
          
    }
  return (
    <Container>
    <p></p>
    <Row>
    </Row>
    <Row className='justify-content-center'>
        <Col className='col-md-6'>
            Hi, User!
        
        
            <Input
            type='select'
            id='productGroup'
            className='form-control'>
                <option>What are we making today?</option>
                <option>Digital Print</option>
                <option>Litho Print</option>
                <option>Screen Printed Textile</option>
                <option>Screen/Letterpress Flatstock</option>
                <option>Non-print</option>

            </Input>
            </Col>
            
    </Row>
    <br />
    <Row>
    <div className='d-flex justify-content-end'>
        <ButtonGroup>
            <Button 
                outline
                color='info'
                id='loadButton'
                onClick={getAQuoteNumber}
                >Get a Quote Number
            </Button>
            <Button
                outline
                color='secondary'
                id='openButton'
                onClick={toggleModal}
                >
                    Load
                </Button>
            <Button
            color='danger'
            id='clearButton'>Clear</Button>
        </ButtonGroup>
        </div>
        </Row>
        <Modal isOpen={modal} toggle={toggleModal} >
        <ModalHeader toggle={toggleModal}>Load an estimate</ModalHeader>
        <ModalBody>
          <Label htmlFor='prevEst'>Previous Estimate</Label>
          <Input type='text' id='prevEst'/>
        </ModalBody>
        <ModalFooter>
        <ButtonGroup>
          <Button color="info" outline onClick={toggleModal}>Load Estimate</Button>{' '}
          <Button color="warning" outline onClick={toggleModal}>Cancel</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
    
    </Container>
  )
}

export default EstimatingStartScreen