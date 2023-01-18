import React, { Component } from 'react';
import Accueil from "./Accueil/Accueil";
import Localisation from './Localisation/Localisation';
import Contact from './Contact/Contact';
import NavBar from "../../components/Ui/NavBar/NavBar";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Route404 from "../../components/Route404/Route404";
import Footer from "../../components/Footer/Footer"

class Site extends Component {
    render() {
        return (
            <>
                <div className='Site'>
                    <NavBar />
                    <Container>
                        <Switch>
                            <Route path="/" exact render={() => <Accueil />} />
                            <Route path="/localisation" render={() => <Localisation />} />
                            {/* <Route path="/contact" render={(props) => <Contact />} /> */}
                            <Route path="/contact" render={(props) => <Contact {...props}/>} />
                            {/* <Route render={() => <Route404 />} /> */}
                        </Switch>
                    </Container>
                    <div className='minSite'></div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Site;