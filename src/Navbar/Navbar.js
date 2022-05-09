import React from 'react';
import MenuItems from './Menuitems';
import './Navbar.css';

class Navbar extends React.Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <nav className='navigation'>
                <h1><span>Up</span>flip</h1>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.name}</a></li>
                        )
                    })
                    }
                </ul>
                <div className='Menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                </div>

           
            </nav>
        )
    }
}

export default Navbar;