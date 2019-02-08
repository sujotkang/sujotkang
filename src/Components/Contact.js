import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../Styles/Contact.css';


const Contact = () => {
    return (
        <CSSTransitionGroup
            transitionName="contactTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div id="contact">
            <p> Email: kangsujot@gmail.com</p>
            <p>I can also be found on:</p>
                <img id="linkedin" src="https://cdn2.iconfinder.com/data/icons/aquaticus/60%20X%2060/linkedin.png"></img>
                <img id="github" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png"></img>
            </div>
        </CSSTransitionGroup>
    )
}

export default Contact;