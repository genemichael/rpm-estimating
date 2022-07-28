import React, { useState, useRef, useEffect } from 'react'
import ToggleSwitch from '../../ToggleSwitch/ToggleSwitch';
import SaveContinue from '../Buttons/SaveContinue';
import { Container, 
    Row, 
    Col, 
    Label,
    Input, 
    Form, 
    FormGroup, 
    Alert,
    ButtonGroup,
    Button,
    ButtonToggle
 } from 'reactstrap'
 

const EstimatingDetails = () => {
  
    return (
    <Container>
    <Form>
        <Row>
            <Col>
                <h5>Project Details</h5>
            </Col>
            <Col>
                <div className='d-flex justify-content-end'>
                    Estimate Number: 
                </div>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
                <Label htmlFor='cust'>
                    Customer
                </Label>
                <Input
                type='text'
                name='cust'
                id='cust'
                >
                </Input>
                <Label htmlFor='desc'>
                    Project Title
                </Label>
                <Input
                type='text'
                name='desc'
                id='desc'
                >
                </Input>
            </Col>
            <Col>
                <Label htmlFor='pm'>
                    Project Manager
                </Label>
                <Input
                type='select'
                id='pm'
                name='pm'
                className='form-control'
                >
                    <option></option>
                    <option>Merle May Lestrange Lauria Lenssen</option>
                </Input>
                <Label 
                htmlFor='rep'>
                Sales Rep
                </Label>
                <Input
                type='select'
                id='rep'
                name='rep'
                className='form-control'
                >
                    <option></option>
                <option>Berta Caseres</option>
                </Input>
                
            </Col>
            <Col>
                <Label htmlFor='type'>
                    Job Type
                </Label>
                <Input
                type='select'
                name='type'
                id='type'
                className='form-control'>
                    <option></option>
                    <option>New Job</option>
                    <option>ERP</option>
                    <option>Reprint w/Changes</option>
                </Input>
                <Label htmlFor='prev'>
                    Previous Job
                </Label>
                <Input
                type='text'
                name='prev'
                id='prev'
                className='form-control'>

                </Input>
            </Col>
        </Row>
        <br/>
        <SaveContinue/>
        
    </Form>
    </Container>
    
  )
}

export default EstimatingDetails