import React, { Component } from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'; 
export class Header extends Component {
    render() {
        return (
            <div className="header">
                
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
                
                <img src="https://toppng.com/uploads/preview/tinder-logo-transparent-11563247829tbb8yoy9a1.png" className="header__logo" />

                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>

            </div>
        )
    }
}

export default Header
