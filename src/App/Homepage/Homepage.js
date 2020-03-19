import React from 'react';
import './Homepage.scss';
import Categories from './Categories/Categories';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.windowScroll();
    }

    windowScroll() {
        const scroll_position = window.scrollX;
        document.querySelector('.home').style.background_position_x = `${scroll_position + 'px'}`;
    }

    render() {
        return (
            <div>
                <div className="home">
                    <div className="quote">
                        <p>
                        "There is no adrenaline rush. If I get an adrenaline rush, it means that something has gone horribly wrong."<span>-Alex Honnold</span>
                        </p>
                    </div>
                </div>
                <Categories />
            </div>
        );
    }
}
export default Homepage;