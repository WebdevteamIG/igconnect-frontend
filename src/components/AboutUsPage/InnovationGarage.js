import React, { Component } from 'react'
import ig from '../images/ig.png'

export class InnovationGarage extends Component {
    render() {
        return (
            <div>
                <h1 id="heading_ig">INNOVATION GARAGE <span class="tab" />    
                <img src={ig} alt="Innovation Garage" width="80px" height="80px" className="ig_logo"/></h1>
                <p id="text">
                    The CII also provides the platform for the students to carry 
                    out innovative projects through Innovation Garage (IG). 
                    Innovation Garage is a multidisciplinary 24x7 maker's 
                    space for the students to work on the innovative projects 
                    and develop prototypes.
                </p>
                <hr />
            </div>
        )
    }
}

export default InnovationGarage
