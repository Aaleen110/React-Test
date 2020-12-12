import React, { Component } from 'react';
import Ripple from 'react-ripples'

export default class ButtonCustom extends Component {
    render() {

        let props = this.props;
        return (
            <Ripple
                onClick={props.onPress}>
                <div
                    className={'btn'}
                    style={{ height: 40, width: 100, backgroundColor: props.color, borderRadius: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    <div style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{props.title}</div>
                </div>
            </Ripple>
        )
    }

}