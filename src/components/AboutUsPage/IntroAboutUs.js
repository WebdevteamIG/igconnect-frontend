import React, { Component } from 'react'
import './styles.css'
import building from '../images/IG_building.png'

export class IntroAboutUs extends Component {
    render() {
        return (
            <div class="AboutUsIntro">
                <div class="" >
                    <h1 className="Main">ABOUT US</h1>
                </div>
                <div class="BuildingImage">
                    <img src={building} alt="Innovation garage building" width="450px" height="400px" className="building_img"/>
                </div>
                
            </div>
        )
    }
}

export default IntroAboutUs
