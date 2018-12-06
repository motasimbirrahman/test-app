import React, { Component } from 'react';
import './Image.css'

class Image extends Component {

    render() {
        const video_feed = 'http://0.0.0.0:8000/camera_feed'
        return (
            
            <div>
                <img src={video_feed}  width='700px' alt=""/>
            </div>
        );
    }
}

export default Image;

