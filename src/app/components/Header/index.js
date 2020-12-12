import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import Ripple from 'react-ripples'


class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }

    render() {
        const { selectTab = () => { } } = this.props;
        return (
            <div
                className={'borderBottom'}
                style={{ display: 'flex', backgroundColor: '#F5F9FA', alignItems: 'center' }}>
                <img src={logo} className="App-logo" />

                <div
                    className={'btn'}
                    onClick={() => {
                        selectTab(0);
                        this.setState({
                            selected: 0
                        })
                    }}
                    style={styles.button_container}>
                    <h7 style={this.state.selected == 0 ? styles.selected_header : styles.unselected_header}>{"Data Upload"}</h7>
                </div>


                <div
                    className={'btn'}
                    onClick={() => {
                        selectTab(1);
                        this.setState({
                            selected: 1
                        })
                    }}
                    style={styles.button_container}>
                    <h7 style={this.state.selected == 1 ? styles.selected_header : styles.unselected_header}>{"Rules Creation"}</h7>
                </div>


                <div
                    className={'btn'}
                    onClick={() => {
                        selectTab(2);
                        this.setState({
                            selected: 2
                        })
                    }}
                    style={styles.button_container}>
                    <h7 style={this.state.selected == 2 ? styles.selected_header : styles.unselected_header}>{"Download Output"}</h7>
                </div>
            </div>
        );
    }
}

const styles = {
    button_container: {
        height: 40,
        width: null,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
    },

    selected_header: {
        color: '#333',
        fontWeight: 'bold'
    },

    unselected_header: {
        color: 'grey',
        fontWeight: 'bold'
    }
}

export default Header;
