/**
 * The ProfileSlider component provides a Slider which shows some text in the first slide and an image in the second slide
 */

import React from 'react';
import Carousel from 'nuka-carousel';

const ProfileSlider = () => {
    const { contentStyle, imageStyle } = styles;

    return (
            <Carousel 
                    framePadding="20px" 
                    cellAlign="center">
                <div style={contentStyle}>
                    In every joke is a part of a joke
                </div>
                <div style={contentStyle}>
                    <img style={imageStyle} 
                    src="https://cdn.meme.am/instances/57054365.jpg"/>
                </div>
            </Carousel>
    );
}

const styles = {
    contentStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        fontSize: 30
    },
    imageStyle: {
        width: '250px',
        height: '300px'
    }
}

export default ProfileSlider;