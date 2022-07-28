import { Container, Navbar, NavbarBrand, NavItem } from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHatWizard } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
  return (
    <Navbar dark color="info" sticky="top" expand='md'>
        <Container>
            <NavbarBrand href="/">
                <FontAwesomeIcon icon={faHatWizard}/> 
            </NavbarBrand>
            RPM Press
        </Container>
    </Navbar>
  )
}

export default Header