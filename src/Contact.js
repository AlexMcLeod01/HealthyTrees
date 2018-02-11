import React, { Component } from 'react';
import './Contact.css';
//
class Contact extends Component {
    render () {
        const gotchaStyle = {
            'display': 'none'
        }
        
        return (
            <div>
                <h3>Need To Ask Us A Question?</h3>
                <form action="https://formspree.io/AlexMcLeod01@gmail.com"
      method="POST" className="FormOuter" id="contactform">
                    <input type="text" name="name" placeholder="Your name" className="TextItems"/>
                    <input type="text" name="_replyto" placeholder="Your email" className="TextItems"/>
                    <input type="hidden" name="_subject" value="Contact Form Submitted" />
                    <input type="text" name="_gotcha" style={gotchaStyle} />
                    <textarea name="message" form="contactform" className="TextField" defaultValue="Your Message Here."></textarea>
                    <input type="submit" value="Send" className="Button"/>
                </form>
            </div>
        );
    }
}

export default Contact;