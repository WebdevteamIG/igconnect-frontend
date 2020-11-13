import React from 'react';
import doorImage from './doorImage.jpg';
import './styles.css';

export const Facilities = () => {
    return (
        <div  className="Facilities">

            <div>
                    <span className="facilities-heading" >
                        <span className="facilities-main-heading">
                            FACILITIES AND SPACE AT 
                        </span>
                        <span className="facilities-heading-text">
                                <span>CENTER FOR</span> 
                                <span>INOVATION </span> 
                                <span>INCUBATION</span>
                          
                        </span>
                    </span>
                <img src={doorImage} className="doorImage"  />
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
            
        </div>
    )
}

export default Facilities