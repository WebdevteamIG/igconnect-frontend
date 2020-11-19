import React from 'react';
import doorImage from './doorImage.jpg';
import c4iiblack from '../images/CIIBlack.png';
import './styles.css';

export const Facilities = () => {
    return (
        <div  className="Facilities">
            <div style={{alignSelf:"flex-start"}} >
                <h1 id="heading_ig">FACILITIES AND SPACE AT <span class="tab" />    
                    <img src={c4iiblack} alt="Innovation Garage Logo" width="200px" height="100px" className="ig_logo"/>
                </h1>
                    <div className="facilites-text">

            The Centre for Innovation and Incubation, popularly known as Dr V.A.Sastry Innovation Centre 
            (in the name of an alumnus of 1964 B.Tech batch who donated Rs 1 crore for this building) 
            is a G+2 building, with a floor space of approx. 30,000 sft. The CII facilitates the following at present.
                <br/>
                <br/>
            Industries, who wish to establish their research labs, will be provided the necessary 
            lab space depending upon their requirement. The industrialists / entrepreneurs can have 
            access to use the other Institute facilities on payment of charges as per the norms of the Institute. 
            The creative talent of students and the experience and expertise of the faculty are the key factors 
            to motivate industries to open their R&D labs at the Centre for Innovation and Incubation of NITW.
                <br></br>
            </div>
            </div>  
            <div className="doorImage" >
                <img src={doorImage} alt="Door " className="door" />
            </div>
        </div>
    )
}

export default Facilities