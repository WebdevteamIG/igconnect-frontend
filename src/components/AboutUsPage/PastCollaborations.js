import React from 'react'
import './styles.css';


// Collabrations 
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
        <div   className="PastCollabrations">
            <div  className="collab-heading">
                PAST 
                <br/> 
                COLLABRATIONS 
            </div>
            <div className="images-box">
                <img src={google} alt="google logo"  style={{width:"300px",height:"100px"}}  /> 
                <img src={facebook} alt="facebook logo" style={{width:"300px",height:"100px"}} /> 
                <img src={servicenow} style={{width:"300px",height:"100px"}} alt="servicenow logo" />
                <img src={microsoft} alt="microsoft logo" style={{width:"300px",height:"100px"}} />
                <img src={yellowMessanger} alt="yellow meesanger logo" style={{width:"300px",height:"100px"}} />
                <img src={TIC} alt="TIC logo" style={{width:"300px",height:"100px"}} />
                <img src={texasInstruments} alt="texas logo " style={{width:"250px",height:"100px"}} />
                <img src={girlscript} alt="Girlscript logo " style={{width:"100px",height:"100px"}} />
                <img src={LearningLinksFoundation} alt="learninglinks logo " style={{width:"150px",height:"100px"}} />
                <img src={Merge} alt="merge logo " style={{width:"200px",height:"100px"}} />
            </div>
        </div>
    )
}

export default PastCollabrations;
