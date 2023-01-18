import React, { Component } from 'react';
import Titre from "../../../components/Ui/Titres/TitreH1";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
// import { Route } from 'react-router-dom';
import ContactForm from "./ContactForm/ContactForm";
// import ContactForm from "./ContactForm/ContactForm";
import {Route} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous !</Titre>
                <div>
                    <h2>Adresse :</h2>
                    xxxxxxxxxxxx
                    <h2>Téléphone :</h2>
                    00 00 00 00 00
                </div>
                <h2>Vous péférez nous écrire ?</h2>
                <LinkContainer to={this.props.match.path+"/form"}>
                    <Button variant="primary">Formulaire de contact</Button>
                </LinkContainer>
                <Route path={this.props.match.path + "/form"} render={(props) => <ContactForm />} />
            </>
        );
    }
}

export default Contact;