import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "../../../src/helpers/icons"
import contactPagePicture from "../../components/images/IMG_7450.jpg"
import "./contact.scss";

Icons()

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">801-427-6175</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">tstaxhelp@gmail.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                    <div className="text">Orem, UT</div>
                </div>
            </div>
            </div>
            
        </div>

    )
}