import React, {PureComponent} from 'react';

class Navbar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.habitsCnt}</span>
                <a href="https://github.com/Dayoung3460/react_habit_tracker"
                   target="_blank" className="github">
                    <i className="fab fa-github-square"></i>
                </a>
            </nav>
        );
    }
}

export default Navbar;
