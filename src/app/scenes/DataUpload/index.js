import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ActionHeader, Header } from '../../components';
import deleteIcon from '../../assets/images/delete.svg';


const data = [
    {
        file_name: 'Purchase_data_2020.xlxs',
        upload_date: '27th November',
        action: 'delete'
    },
    {
        file_name: 'Purchase_data_2021.xlxs',
        upload_date: '30th February',
        action: 'delete'
    }
];

export default class DataUpload extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div >
                <ActionHeader
                    title={'Upload data for enrichment'}
                    link={'Download the import template'}
                    onLinkPress={() => { }}
                    buttonTitle="Add data"
                    onButtonPress={() => { }}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Table striped bordered hover style={{ width: '94%', marginTop: 16 }}>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Upload Date</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.map(row => {
                                return <tr style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <td style={{ color: '#0070c0', textDecorationLine: 'underline', }}>{row.file_name}</td>
                                    <td>{row.upload_date}</td>
                                    <td style={{ textAlign: 'center' }}>
                                        <img src={deleteIcon} style={{ height: 18, width: 18, }} />
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
