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
                <img src={google}/> 
                <img src={facebook}/> 
                <img src={servicenow} style={{width:"350px"}}/>
                <img src={microsoft}/>
                <img src={yellowMessanger}/>
                <img src={TIC}/>
                <img src={texasInstruments}/>
                <img src={girlscript}/>
                <img src={LearningLinksFoundation}/>
                <img src={Merge}/>
            </div>
        </div>
    )
}

export default PastCollabrations;
