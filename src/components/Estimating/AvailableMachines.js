
//import { Tab } from 'bootstrap'
import React, {useState} from 'react'
import { Button, Table, Row, Col, Tab, Input } from 'reactstrap'


const AvailableMachines = () => {
    const [list, setList] = React.useState([]);
    const addFunction = (machineName) => {
    list.push(machineName);
    handleAdd();
  };
  const handleAdd = () => {
    const items = list;
    setList([...items]);
  };

  const handleRemove = (index) => {
    const items = list;
    if (items.length > 0) {
      const lastIndex = items.length - 1;
      setList([
        ...items.slice(items, index),
        ...items.slice(index + 1, items.length)
        ]
        );
    }
  };
  return (
    <>
        <Row>
            <Col className='col-5'>
             <Table
                hover
                >
                    <thead>
                        <tr>
                            <th>
                                Machine
                            </th>
                            <th>
                                Add
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            Indigo
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("Indigo")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Versant
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("Versant")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            KM1250
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("KM1250")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Hopkins 4-Color
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("Hopkins 4-Color")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Chief 15
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("Chief 15")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            19 Cutter
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("19 Cutter")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MBO Folder
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("MBO Folder")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Cylinder Press
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("Cylinder Press")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Duplo Tower
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("Duplo Tower")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Vendor Service
                        </td>
                        <td>
                            <Button color='info' onClick={() => {addFunction("Vendor Service")}}>
                                +
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
            <Col className='col-2'>

            </Col>
            <Col className='col-5'>
                <Table
                hover>
                    <thead>
                        <tr>
                            <th>
                                Selected Machine
                            </th>
                            <th>
                                Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody id="selectedList">
                    {list.map((item, index) => (
                        <>  
                            <tr>
                                <td key={index}>{item}</td>
                                <td>
                                    <Button key={index+Math.random} color='danger' onClick={() => {handleRemove(index)}}>
                                        -
                                    </Button>
                                </td>
                            </tr>
                        </>
                        )
                        )}    
                    </tbody>
                </Table>
            </Col>
        </Row>
    </>
  )
}

export default AvailableMachines