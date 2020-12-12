import React, { Component } from 'react';
import { Header } from '../../components'
import { httpCall } from '../../utils/services';
import DataUpload from '../DataUpload';
import RulesCreation from '../RulesCreation';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabIndex: 0
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        let response = await httpCall('GET', 'api/', null);
        console.log('Response', JSON.stringify(response))
    }

    render() {
        const { tabIndex } = this.state;
        return (
            <div style={{ display: 'flex', width: '100%', height: '100%', flexDirection: 'column', }}>
                <Header
                    selectTab={(tabIndex) => {
                        this.setState({
                            tabIndex
                        })
                    }}
                />

                {
                    tabIndex == 0 ?
                        <DataUpload />
                        :
                        tabIndex == 1 ?
                            <RulesCreation />
                            :
                            null
                }

            </div>
        )
    }
}
