import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./assets/Logo.png"

function NavBar() {
    return (
        <>
            <Container>
                <Navbar style={{ background: "#FFFFFF" }} expand="lg" variant="light" bg="light">
                    <Container>
                        <img className='logo' src={Logo} alt="hello world" />
                    </Container>
                </Navbar>
            </Container>
        </>
    );
}

export default NavBar;
