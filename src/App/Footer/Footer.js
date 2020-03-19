import React from 'react';
import './Footer.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                        <h2>Yotam balilti</h2>
                        <span>Web desginer</span>
                        <div>
                            {/* <li><FontAwesomeIcon icon="faCoffee" /></li> */}
                            <li><i class="fab fa-github"></i></li>
                            <li><i class="fab fa-facebook"></i></li>
                        </div>
                </footer>
            </div>
        );
    }
}
export default Footer;