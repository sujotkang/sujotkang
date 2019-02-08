import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import '../Styles/Navigation.css';


const Navigation = () => {
    return (
        <div id="toolbar">
            <AppBar id="bar" position="static">
                    <Typography variant="title" color="inherit">
                        <ul className="header">
                            <li><NavLink to="/">Sujot Kang</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
                        </ul>
                    </Typography>
            </AppBar>

            <AppBar id="bottomBar" position="fixed">
                <ul id="footer">
                    <li>kangsujot@gmail.com</li>
                    <li><a href="https://github.com/sujotkang" target="_blank"><img id="github" src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>/sujotkang</a></li>
                    <li><a href="https://www.linkedin.com/in/sujotkang/" target="_blank"><img id="linkedin" src="https://cdn2.iconfinder.com/data/icons/aquaticus/60%20X%2060/linkedin.png"></img>/sujotkang</a></li>
                </ul>
            </AppBar>

        </div>
        
    )
}

export default Navigation;