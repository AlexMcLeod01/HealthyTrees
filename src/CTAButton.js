import React, { Component } from 'react';
import './CTAButton.css';

class CTAButton extends Component {
    render () {
        const style = {
            width: this.props.width,
            height: this.props.height,
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: 'x-small',
            paddingTop: '5px'
        };
        
        const textStyle = {
            textAlign: 'center',
            color: '#fefeff'
        };
        
        return (
            <div style={style} className='hovering'>
                <div style={textStyle}>{this.props.text}</div>
            </div>
        );
    }
}

export default CTAButton;