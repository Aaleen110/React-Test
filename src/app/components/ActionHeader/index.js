import React, { Component } from 'react';
import { ButtonCustom } from '..';
import Colors from '../../utils/colors';
import commonstyles from '../../common/commonstyles';

class ActionHeader extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }

    render() {
        const { onLinkPress = () => { }, onButtonPress = () => { }, title, link, buttonTitle } = this.props;
        return (
            <div
                style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', padding: 16 }}>
                <div
                    style={commonstyles.button_container}>
                    <h7 style={commonstyles.selected_header}>{title}</h7>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                    {link ? <div
                        className={'btn'}
                        onClick={() => {
                            onLinkPress();
                        }}
                        style={{ fontStyle: "italic", textDecorationLine: 'underline', color: '#0070c0', fontSize: 14, marginRight: 16 }}>Download the import template</div> : null}

                    <ButtonCustom
                        title={buttonTitle}
                        color={Colors.newBlue}
                        onPress={() => {
                            onButtonPress()
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default ActionHeader;
