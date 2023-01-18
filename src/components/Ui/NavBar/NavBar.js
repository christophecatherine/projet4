// import React from "react";
// import { NavLink } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'
// import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
// // import {LinkContainer} from "react-router-bootstrap";

// const navBar = (props) => (
//     <>
//         <Navbar bg="dark" variant="dark" expand="lg">
//             <Navbar.Brand href="#home">Ariège MGA</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="mr-auto">
//                     <LinkContainer exact to="/">
//                         <Nav.Link>Accueil</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer exact to="/localisation">
//                         <Nav.Link>Localisation</Nav.Link>
//                     </LinkContainer>
//                     <LinkContainer exact to="/contact">
//                         <Nav.Link>Contact</Nav.Link>
//                     </LinkContainer>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     </>
// );

// export default navBar;
import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

const navBar = (props) => (
    <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Ariège MGA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to="/">
                        <Nav.Link as={NavLink} exact to="/">Accueil</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/localisation">
                        <Nav.Link as={NavLink} exact to="/localisation">Localisation</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/contact">
                        <Nav.Link as={NavLink} exact to="/contact">Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
);

export default navBar;