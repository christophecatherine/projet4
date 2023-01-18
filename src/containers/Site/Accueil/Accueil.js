import React from "react";
import Titre from "../../../components/Ui/Titres/TitreH1";
import Image from 'react-bootstrap/Image';
import imgAccueil from "../../../assets/images/chateau.jpg";

const accueil = (props) => (
    <>
    <Titre>Bienvenue sur le site de l'Ariège !</Titre>
    <p>Le site vous aidant à trouver les établissements publics de l'Ariège</p> 
    <Image src={imgAccueil} fluid thumbnail style={{width:"100%"}}/>       
    </>
);

export default accueil;