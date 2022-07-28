import React, { useState, useEffect, useRef } from 'react'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch'
import { 
    Container, 
    Row,
    Col,
    Button,
    Collapse,
    Card,
    CardBody,
    Table,
    Input
 } from 'reactstrap'
import SaveContinue from '../Buttons/SaveContinue';
import { NewEstimateNumber } from '../../../apps-script/main';

const SpecComponent = (newEstimateNumber) => {
  const [pdfProofActive, setPdfProofActive] = useState(false);
  const [hardProofActive, setHardProofActive] = useState(false);
  const [colorMatchActive, setColorMatchActive] = useState(false);
  const [variableDataActive, setVariableDataActive] = useState(false);
  const [filePrepActive, setFilePrepActive] = useState(false);
  const pdfToggleIsTrue = () =>{
    setPdfProofActive(current => !current);
  };
  
  const hardToggleIsTrue = () =>{
    setHardProofActive(current => !current);
  };

  const colorMatchToggleIsTrue = () =>{
    setColorMatchActive(current => !current);
  };

  const variableDataToggleIsTrue = () =>{
    setVariableDataActive(current => !current);
  };
  const filePrepActiveIsTrue = () => {
    setFilePrepActive(current => !current)
  }

  const initialToggleValue = useRef(false);

  useEffect(() => {
    if(initialToggleValue.current) {
      initialToggleValue.current=true
      return;
    }
    
  }, [initialToggleValue])

  return (
    <Container>
    <Row>
    <Col className='col-5'>
      <h5>Prepress</h5>
      </Col>
      <Col>
        <div className='d-flex justify-content-end'>
          Estimate Number: 
        </div>
      </Col>
      </Row>
        <Card>
          <CardBody >
          <Row>
            <Col>
              PDF Proof
            </Col>
            <Col>
              <ToggleSwitch 
                  id='pdfProof'
                  checked={pdfProofActive}
                  onClick={pdfToggleIsTrue}
                  onChange={pdfToggleIsTrue}
                />
            </Col>
            <Col>
            Quantity
            <Input type='number' id='pdfQty'/>
            </Col>
          </Row>
          <Row>
            <Col>
              Color Proof
            </Col>
            <Col>
              <ToggleSwitch 
                  id='hardProof'
                  checked={hardProofActive}
                  onClick={hardToggleIsTrue}
                  onChange={hardToggleIsTrue}
                />
            </Col>
            <Col>
            Quantity
            <Input type='number' id='hardProofQty'/>
            </Col>
          </Row>
          <Row>
            <Col>
              Color Match
            </Col>
            <Col>
              <ToggleSwitch 
                  id='colorMatch'
                  checked={colorMatchActive}
                  onClick={colorMatchToggleIsTrue}
                  onChange={colorMatchToggleIsTrue}
                />
            </Col>
            <Col>
            Colors
            <Input type='number' id='colorMatchQty'/>
            </Col>
          </Row>
          <Row>
            <Col>
              File Prep
            </Col>
            <Col>
              <ToggleSwitch
              id='filePrep'
              checked={filePrepActive}
              onClick={filePrepActiveIsTrue}
              onChange={filePrepActiveIsTrue} />
            </Col>
            <Col>
              Hours
              <Input type='number' id='prepHours' />
            </Col>
          </Row>
          <Row>
            <Col>
              Variable Data
              </Col>
            <Col>
              <ToggleSwitch
                    id='variableData'
                    checked={variableDataActive}
                    onClick={variableDataToggleIsTrue}
                    onChange={variableDataToggleIsTrue}/>
            </Col>
            <Col>

            </Col>
          </Row>
          <br />
          <SaveContinue/>
          </CardBody>
        </Card>
    </Container>
  );
};

export default SpecComponent;
