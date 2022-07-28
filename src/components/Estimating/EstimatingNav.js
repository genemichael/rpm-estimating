import React, {useState} from 'react'
import { Nav, NavItem, NavLink, Card, CardBody, Container, Row, Collapse } from 'reactstrap'
import EstimatingStartScreen from './EstimatingStartScreen'
import EstimatingDetails from './EstimatingDetails'
import SpecComponent from './SpecComponent'
import ProductionRoute from './ProductionRoute'
import Extras from './Extras'


const EstimatingNav = () => {
    const [active, setActive] = useState(1);
      
  return (
    <Container>
    <Row>
      <Nav tabs>
        <NavItem>
          <NavLink onClick={() =>setActive(1)}>Start</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActive(2)}>Project Header</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActive(3)}>Prepress</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActive(4)}>Production</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActive(5)}>Extras</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActive(6)}>Shipping</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setActive(7)}>Notes</NavLink>
        </NavItem>
      </Nav>
    </Row>
    <Row>
      <Collapse isOpen={active === 1 ? true : false}>
        <Card>
          <CardBody>
            <EstimatingStartScreen />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 2 ? true : false}>
        <Card>
          <CardBody>
            <EstimatingDetails />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 3 ? true : false}>
        <Card>
          <CardBody>
            <SpecComponent />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 4 ? true : false}>
        <Card>
          <CardBody>
            <ProductionRoute />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 5 ? true : false}>
        <Card>
          <CardBody>
            <Extras />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 6 ? true : false}>
        <Card>
          <CardBody>
            <EstimatingDetails />
          </CardBody>
        </Card>
      </Collapse>
      <Collapse isOpen={active === 7 ? true : false}>
        <Card>
          <CardBody>
            <EstimatingDetails />
          </CardBody>
        </Card>
      </Collapse>
    </Row>
  </Container>
);
}

export default EstimatingNav