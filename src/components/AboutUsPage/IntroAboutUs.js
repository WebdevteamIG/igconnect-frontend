import React, { Component } from 'react'
import './styles.css'
import building from '../images/IG_building.png'

export class IntroAboutUs extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-md-5">
                    <h1 className="Main">ABOUT US</h1>
                </div>
                <div class="col-md-7">
                    <img src={building} alt="Innovation garage building" width="350px" height="300px" className="building_img"/>
                </div>
                <br />
                <hr />
                <br />
            </div>
        )
    }
}

export default IntroAboutUs
