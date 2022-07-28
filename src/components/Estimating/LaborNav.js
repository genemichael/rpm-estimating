import React, {useState} from 'react'
import { Nav, NavItem, NavLink, Card, CardBody, Container, Row, Col, Collapse, Button } from 'reactstrap'
import AvailableMachines from './AvailableMachines';
import CompFinMachines from './CompFinMachines'
import ProdFinMachines from './ProdFinMachines';

const LaborNav = () => {
    const [active, setActive] = useState(1);
    
  return (
    <>
    <Row>
    <Nav
    tabs>
        <NavItem>
            <NavLink onClick={() =>setActive(1)}>
                Sheet
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() =>setActive(2)}>
                Component Finishing
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() =>setActive(3)}>
                Product Finishing
            </NavLink>
        </NavItem>
    </Nav>
    </Row>
    <Row>
        <Collapse isOpen={active === 1 ? true : false}>
        <Card>
          <CardBody>
          This card modifies the press sheet for this sole component.
          <br/>
            <AvailableMachines />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 2 ? true : false}>
        <Card>
          <CardBody>
            <CompFinMachines />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 3 ? true : false}>
        <Card>
          <CardBody>
            <ProdFinMachines />
          </CardBody>
        </Card>
      </Collapse>
    </Row>
    </>
  )
}

export default LaborNav