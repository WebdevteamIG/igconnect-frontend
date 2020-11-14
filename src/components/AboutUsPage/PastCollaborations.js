import React from 'react'
import './styles.css';
import google from "./collabs/google.png";
import facebook from "./collabs/facebook.png";
import servicenow from "./collabs/servicenow.png";
import yellowMessanger from "./collabs/yellowMessanger.png"
import texasInstruments from "./collabs/texasInstruments.png"
import TIC from "./collabs/TIC.png"
import girlscript from "./collabs/girlscript.png"
import microsoft from "./collabs/microsoft.png"
import LearningLinksFoundation from "./collabs/LearningLinksFoundation.png"
import Merge from "./collabs/Merge.png"


const PastCollabrations = () => {
    return (
        <div className="PastCollabrations">
            <div className="collab-heading">
                PAST 
                <br/> 
                COLLABRATIONS 
            </div>
            <div className="images-box">
                <img src={google} alt="google logo" /> 
                <img src={facebook} alt="facebook logo" /> 
                <img src={servicenow} style={{width:"350px"}} alt="servicenow logo" />
                <img src={microsoft} alt="microsoft logo"/>
                <img src={yellowMessanger} alt="yellow meesanger logo"/>
                <img src={TIC} alt="TIC logo"/>
                <img src={texasInstruments} alt="texas logo "/>
                <img src={girlscript} alt="Girlscript logo "/>
                <img src={LearningLinksFoundation} alt="learninglinks logo "/>
                <img src={Merge} alt="merge logo "/>
            </div>
        </div>
    )
}

export default PastCollabrations;
