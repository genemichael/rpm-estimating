import React, { useState } from 'react'
import { 
    Container, 
    Row,
    RowProps,
    Col,
    ColProps,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Button,
    ButtonGroup,
    Input
 } from 'reactstrap'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'


const EstimatingStartScreen = () => {
    const [isCopy, setIsCopy] = useState(false)
    const toggle = () => setIsCopy(current => !current)
    const getAQuoteNumber = () => {
        
            google.script.run.withSuccessHandler(loadNumber).NewEstimateNumber();
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
        <Col>

        </Col>
        <Col>
            <p>Copy Previous Estimate?</p>
        </Col>
        <Col>
            <ToggleSwitch
                id='hardProof'
                    checked={isCopy}
                    onClick={toggle}
                    onChange={toggle}
                    >
            </ToggleSwitch>
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
                >
                    Load
                </Button>
            <Button
            color='danger'
            id='clearButton'>Clear</Button>
        </ButtonGroup>
        </div>
        </Row>
    
    </Container>
  )
}

export default EstimatingStartScreen