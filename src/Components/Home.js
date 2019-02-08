import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../Styles/Home.css';


const Home = () => {
    return (
        <CSSTransitionGroup
        transitionName="homeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
            <div id="aboutMe">
                <p id="pp">
                    Hi, I'm Sujot (sue·jawt). 
                    <br/>
                    I'm a Web Developer with a background in UX and HCI.
                </p>
            </div>
            <div id="experience">
                
            </div>
 
        </CSSTransitionGroup>
    )
}

export default Home;