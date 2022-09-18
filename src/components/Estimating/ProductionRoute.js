import React, { useState } from 'react'
import { 
    Row,
    Col,
    Button,
    Collapse,
    Container,
    Card,
    CardBody,
    ButtonGroup,
    Input,
    Form
 } from 'reactstrap'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'
import SaveAddClear from '../Buttons/SaveAddClear'
import LaborNav from './LaborNav'
 

const ProductionRoute = () => {
    const [specialSubstrate, setSpecialSubstrate] = useState(false)
    const [laborIsOpen, setLaborIsOpen] = useState(false);
    const specialSubstrateIsTrue = () => {
        setSpecialSubstrate(current => !current)
    }
    const toggleLabor = ()=> {
        setLaborIsOpen(!laborIsOpen)
    }
    const addAnother = () => {}

  return (
    <Container>
        <Row>
            <Col>
                <h5>Production Routing</h5>
            </Col>
            <Col>
                <div className='d-flex justify-content-end'>
                    Estimate Number
                </div>
            </Col>
        </Row>
        <Row>
            <p class="lead">Create each component, and route the sheet labor. Then, select components to route the component labor.</p>
        </Row>
        <Form>
            <Row>
                <Col>
                    Part name
                    <Input type='text' tabIndex={0} id='partName' placeholder="This part's description." />
                </Col>
            </Row>
            <Row>
                <Col>
                    Part Dim A
                    <Input type='number' tabIndex={1} id='pDimA' />
                </Col>
                <Col>
                    Part Dim B
                    <Input type='number' tabIndex={2} id='pDimb' />
                </Col>
                <Col>
                    Pages
                    <Input type='number' tabIndex={3} id='pages' />
                </Col>
            </Row>
            <Row>
                <Col>
                    Substrate Dim A
                    <Input type='number' tabIndex={4} id='sDimA' />
                </Col>
                <Col>
                    Substrate Dim B
                    <Input type='number' tabIndex={5} id='sDimb' />
                </Col>
                <Col>
                    Number Out
                    <Input type='number' tabIndex={6} id='numOut' />
                </Col>
            </Row>
            <Row>
                <Col className='col-6'>
                    Substrate
                    <Input
                    type='select' tabIndex={7} id='substrate'>
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                    </Input>
                </Col>
                <Col>
                    <br/>
                    Unlisted Substrate?
                </Col>
                <Col>
                <br/>
                    <ToggleSwitch
                        checked={specialSubstrate}
                        id='specialSubstrate'
                        onChange={specialSubstrateIsTrue}
                        onClick={specialSubstrateIsTrue}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    Colors Side A
                    <Input type='number' tabIndex={8} id='colsA' />
                </Col>
                <Col>
                    Colors Side B
                    <Input type='number' tabIndex={9} id='colsb' />
                </Col>
                <Col>
                    Versions
                    <Input type='number' tabIndex={10} id='versions' />
                </Col>
            </Row>
            <br/>
            <Row>
                <div className='d-grid gap-2'>
                    <Button
                    outline
                    color='info'
                    id='prodRoute'
                    onClick={toggleLabor}
                    title='Production Route'>
                        Production Route
                    </Button>
                    <Collapse isOpen={laborIsOpen}>
                        <Card>
                        <CardBody>
                            <LaborNav/>
                        </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </Row>
        </Form>
        <br/>
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
    </Container>
  )
}

export default ProductionRoute