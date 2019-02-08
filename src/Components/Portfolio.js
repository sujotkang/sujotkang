import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../Styles/Portfolio.css';
import Button from '@material-ui/core/Button';

const Portfolio = () => {
    return (
        <CSSTransitionGroup
            transitionName="portfolioTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div className="container">
                <div className="square">
                    <h3 className="title">Communication Board</h3>
                    <p>
                        By using an iterative design approach (double diamond process) 
                        and rapid prototyping, designed and implemented an organization and 
                        communication board for UCSD Operations. Team pitched the idea to 
                        the UCSD Operations Supervisor and I am proud to say that the 
                        board/system is still used to this day.
                    </p>
                    <div className="twoButt">
                        <Button className="portButt" href="https://docs.google.com/document/d/1l2_5oKTR-hRpc1ipppNDd6kHsJRuTp84wd_3ANo0AVw/edit" target="_blank">
                            Design Brief
                        </Button>
                        <Button className="portButt" href="https://docs.google.com/presentation/d/1EJZ4ukN8pSpB7zMwvzxi3uYpXsBrk_Z1Ty7q_wEfrIA/edit" target="_blank">
                            Presentation
                        </Button>
                    </div>
                </div>
                <div className="square">
                    <h3 className="title">Fit Data (Web)</h3>
                    <p>
                        Leveraged HTML, CSS, node.js, Bootstrap, and HCI principles 
                        to create a citizen science website deployed on Heroku. 
                        The idea behind the website was to allow users to input data 
                        about their health, nutrition, and lifestyle and receive expert 
                        advice and suggestions from health professionals.
                    </p>
                    <div className="twoButt">
                        <Button className="portButt" href="https://fitdata2016.herokuapp.com/" target="_blank">
                            Website
                        </Button>
                        <Button className="portButt" href="https://www.youtube.com/watch?v=N_qG2HQKqVk" target="_blank">
                            Protoype
                        </Button>
                        <Button className="portButt" href="https://www.youtube.com/watch?v=YRb9eyOO-cs" target="_blank">
                            Demonstration
                        </Button>
                    </div>
                </div>
                <div className="square">
                    <h3 className="title">Nonprofit Sustainable Energy</h3>
                    <p>
                        Using stakeholder analysis and a sustainable design approach, my team designed 
                        an energy efficient lighting system for a local, nonprofit community garden. 
                        Mundo Gardens, the nonprofit community garden, used our design and report to pitch to 
                        the city council for funding/help in bringing our design to life.
                    </p>
                    <div id="mundo">
                        <Button className="portButt" href="https://docs.google.com/document/d/18x-Ol3mIzDfEz1fnlH-MhuSvhYhMxO202WsuaaMkhFc/edit" target="_blank">
                            Design Report
                        </Button>
                    </div>
                </div>
                <div className="square">
                    <h3 className="title">Tower Defense Game Prototype (Mobile)</h3>
                    <p>
                        Using InVision, communicated a mobile video game that uses augmented reality 
                        for social computing. It would make a user’s smartphone into an extension of 
                        their hand (as a weapon or tool), and would require verbal communication to win. 
                        The concept revolves around social computing and encouraging collaboration between users.
                    </p>
                    <div className="twoButt">
                        <Button className="portButt" href="https://docs.google.com/document/d/1qIFouBSdSUGQVI1uJUPXyQy9WZITIaoVt1QcP4psEgs/edit" target="_blank">
                            Design Report
                        </Button>
                        <Button className="portButt" href="https://docs.google.com/presentation/d/1l-V2GwvOsN9xTS5Wd2weFsThLo1_iECa7VUVWFPVM60/edit#slide=id.p" target="_blank">
                            Presentation
                        </Button>
                    </div>
                </div>
                <div className="square">
                    <h3 className="title">Poet Blog/Portfolio Website</h3>
                    <p>
                        Implemented node.js, mongoDB (mLab), Express.js, HTML, CSS, Semantic UI, Cloud9, and Heroku 
                        to create and deploy a portfolio/blog website for a poet/author. Website is a work in progress 
                        and intended as a template. Plans for improvement include using a front-end framework to better 
                        display and organize information, and to purchase a domain name to use.
                    </p>
                    <div className="twoButt">
                        <Button className="portButt" href="https://harjinderkang.herokuapp.com/" target="_blank">
                            Current Website
                        </Button>
                    </div>
                </div>
                <div className="square">
                    <h3 className="title">RGB Color Guessing Game (Web)</h3>
                    <p>
                        Using HTML, CSS, and plain JavaScript, created a color guessing game using rgb hex values.
                        Click a colored tile that represents the random rgb value given to win. There is an easy mode (3 tiles)
                        and hard mode (6 tiles) that can be toggled from the main page.
                    </p>
                    <div className="twoButt">
                        <Button href="https://github.com/sujotkang/rgb-Color-Game" target="_blank">
                            Repo
                        </Button>
                    </div>
                </div>
            </div>
        </CSSTransitionGroup>
    );
}

export default Portfolio;