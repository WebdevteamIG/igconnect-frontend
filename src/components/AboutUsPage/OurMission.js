import React, { Component } from 'react'
import './styles.css'

export class OurMission extends Component {
    render() {
        return (
            <div class="row" style={{textAlign:'center'}}>
                <div class="col-md-6">
                    <h1 id="heading">OUR MISSION</h1>
                    <p id="text">
                        To provide the necessary facilities - mentorship, send 
                        funding & resources to convert innovate ideas into independent
                        business models or products in line with our entrepreneurial 
                        vision.
                    </p>
                    <h1 id="heading">OUR VISION</h1>
                    <p id="text">
                        To accelerate the development of students with the cutting 
                        edge technologies and to promote the entrepreneurial ecosystem 
                        at NIT Warangal.
                    </p>
                </div>
                <div class="col-md-3" >
                <span class="material-icons" id="icon_people">groups</span>
                    <p id="stats_people">4000+</p>
                    <p id="text_stats">Students reached per year</p>
                    <br />
                    <br />
                    <span class="material-icons" id="icon_event">event_note</span>
                    <p id="stats_event">20+</p>
                    <p id="text_stats">Events Per Year</p>
                </div>

                <div class="col-md-3">
                <i class='fas fa-handshake' id="icon_hand"></i>
                    <p id="stats_contrib">12+</p>
                    <p id="text_stats">Major Contributions</p>
                    <br />
                    <br />
                    <span class="material-icons" id="icon_bulb">emoji_objects</span>
                    <p id="stats_proj">16+</p>
                    <p id="text_stats">Active Projects</p>
                </div>
                <br />
                <br />
                <hr />
                <br />
            </div>
        )
    }
}


export default OurMission
