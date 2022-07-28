
//import { Tab } from 'bootstrap'
import React from 'react'
import { Button, Table, Row, Col, Tab } from 'reactstrap'

const AvailableMachines = () => {
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
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Versant
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            KM1250
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Hopkins 4-Color
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Chief 15
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            19 Cutter
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MBO Folder
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Cylinder Press
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Duplo Tower
                        </td>
                        <td>
                            <Button>
                                +
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Vendor Service
                        </td>
                        <td>
                            <Button>
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
                    <tbody>
                        <td>
                            Machine
                        </td>
                        <td>
                            <Button>
                                -
                            </Button>
                        </td>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </>
  )
}

export default AvailableMachines