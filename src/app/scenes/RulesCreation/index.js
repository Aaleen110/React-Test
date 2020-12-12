import React, { Component } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';
import { ActionHeader, Header } from '../../components';
import deleteIcon from '../../assets/images/delete.svg';
import editIcon from '../../assets/images/edit.svg';
import nextIcon from '../../assets/images/next.svg';
import Colors from '../../utils/colors';
import commonstyles from '../../common/commonstyles';

const data = [
    {
        file_name: 'Transaction Group',
        upload_date: '27th November',
        action: 'delete'
    },
    {
        file_name: 'Transaction Group',
        upload_date: '30th February',
        action: 'delete'
    }
];

export default class RulesCreation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: data,
            selected: 1,
            showRulesModal: false,
            conditionList: ['Spend less than 10,0000']
        }
    }

    render() {
        const { data, showRulesModal } = this.state;
        return (
            <div >
                <ActionHeader
                    title={'Create Rules'}
                    buttonTitle="Add Rules"
                    onButtonPress={() => { this.setState({ showRulesModal: true }) }}
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Table striped bordered hover style={{ width: '94%', marginTop: 16 }}>
                        <thead>
                            <tr>
                                <th>Rule Name</th>
                                <th>Rule Creation Date</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {data.length ?
                                data.map(row => {
                                    return <tr style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <td>{row.file_name}</td>
                                        <td>{row.upload_date}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <img src={editIcon} style={commonstyles.iconStyle} />
                                            <img src={deleteIcon} style={commonstyles.iconStyle} />
                                            <img src={nextIcon} style={commonstyles.iconStyle} />
                                        </td>
                                    </tr>
                                })
                                :
                                <tr>
                                    <td colSpan="3" style={{ fontStyle: 'italic', color: 'grey' }}>There are no rules available</td>
                                </tr>
                            }


                        </tbody>
                    </Table>
                </div>


                <Modal
                    size={'xl'}
                    show={showRulesModal}
                    centered
                    onHide={() => { this.setState({ showRulesModal: false }) }}

                >
                    <Modal.Header style={{ borderBottomWidth: 0, outline: 'none', borderColor: '#fff', boxShadow: 'none', marginBottom: -16, display: 'flex', justifyContent: 'space-between' }} >
                        <Modal.Title style={{ color: Colors.newBlack, fontWeight: 'bolder', fontSize: 24, marginLeft: 16 }} id="contained-modal-title-vcenter">
                            Create new rules
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form style={{ paddingLeft: 0, display: 'flex', flexDirection: 'row' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '30%', alignItems: 'flex-start', marginRight: 16 }}>

                                <div
                                    className={'btn'}
                                    onClick={() => {
                                        this.setState({
                                            selected: 0
                                        })
                                    }}
                                    style={commonstyles.button_container}>
                                    <h6 style={this.state.selected == 0 ? commonstyles.selected_header : commonstyles.unselected_header}>{"Add rule name"}</h6>
                                </div>


                                <div
                                    className={'btn'}
                                    onClick={() => {

                                        this.setState({
                                            selected: 1
                                        })
                                    }}
                                    style={commonstyles.button_container}>
                                    <h6 style={this.state.selected == 1 ? commonstyles.selected_header : commonstyles.unselected_header}>{"Add rule conditions"}</h6>
                                </div>


                                <div
                                    className={'btn'}
                                    onClick={() => {

                                        this.setState({
                                            selected: 2
                                        })
                                    }}
                                    style={commonstyles.button_container}>
                                    <h6 style={this.state.selected == 2 ? commonstyles.selected_header : commonstyles.unselected_header}>{"Save rules"}</h6>
                                </div>

                            </div>

                            {this.state.selected == 0 ?
                                this.renderRuleName() :
                                this.renderRuleConditions()
                            }

                        </Form>
                    </Modal.Body>
                    <Modal.Footer style={{ borderWidth: 0, marginBottom: 8, }}>
                        <Button style={{ backgroundColor: Colors.newBackground, outline: 'none', borderColor: '#ccc', boxShadow: 'none', fontSize: 16, fontWeight: 'bold', width: 100, color: 'grey' }} onClick={() => { this.setState({ showRulesModal: false }) }}>Cancel</Button>
                        <Button style={{ backgroundColor: Colors.newBlue, outline: 'none', borderColor: '#fff', boxShadow: 'none', fontSize: 16, fontWeight: 'bold', width: 100 }} onClick={() => { this.setState({ showRulesModal: false }) }}>Next</Button>
                    </Modal.Footer>
                </Modal>

            </div >
        )
    }

    renderRuleName() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-between', marginRight: 16, borderLeftWidth: 2, borderLeftColor: '#ccc', borderLeftStyle: 'solid', paddingLeft: 16, paddingRight: 16 }}>
                <Form.Group controlId="formGroupEmail" style={{ width: '100%' }}>
                    <Form.Label style={{ fontWeight: 'bold', color: Colors.newBlack, marginBottom: -14 }}>Rule Name</Form.Label>
                    <Form.Control style={{ boxShadow: 'none', outline: 'none', borderColor: '#ccc', backgroundColor: Colors.newBackground }} placeholder="" />
                    <div style={{ color: 'grey', fontStyle: 'italic' }}>Rule name will be used as column header</div>
                </Form.Group>

                <Form.Group controlId="formGroupEmail" style={{ width: '100%' }}>
                    <Form.Label style={{ fontWeight: 'bold', color: Colors.newBlack, marginBottom: -14 }}>Rule Description</Form.Label>
                    <Form.Control style={{ boxShadow: 'none', outline: 'none', borderColor: '#ccc', backgroundColor: Colors.newBackground }} placeholder="" />
                </Form.Group>
            </div>
        )
    }

    renderRuleConditions() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginRight: 16, borderLeftWidth: 2, borderLeftColor: '#ccc', borderLeftStyle: 'solid', paddingLeft: 16, paddingRight: 16, }}>
                <Form.Group controlId="formGroupEmail" style={{ width: '100%' }}>
                    <Form.Label style={{ fontWeight: 'bold', color: Colors.newBlack, marginBottom: -14 }}>Rule Condition</Form.Label>
                </Form.Group>

                {this.state.conditionList.map(ins => {
                    return <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderStyle: 'solid', borderWidth: 1, borderColor: '#eee', marginBottom: 16 }}>
                        <div style={{ color: Colors.newBlack, fontWeight: 'bold' }}>#</div>
                        <div style={{ color: Colors.newBlue, fontWeight: 'bold' }}>{ins}</div>
                        <div><img src={deleteIcon} style={{ height: 18, width: 18, }} /></div>

                    </div>
                })}

                <Form.Group controlId="formGroupEmail" style={commonstyles.formGroup}>
                    <Form.Label style={commonstyles.formLabel}>If</Form.Label>
                    <Form.Control style={commonstyles.formControl} placeholder="" />
                    <div style={{ color: 'grey', fontStyle: 'italic', marginLeft: 16 }}>and</div>
                </Form.Group>

                <Form.Group controlId="formGroupEmail" style={commonstyles.formGroup}>
                    <Form.Label style={commonstyles.formLabel}>Parameter</Form.Label>
                    <Form.Control style={commonstyles.formControl} placeholder="" />
                    <div style={{ color: 'grey', fontStyle: 'italic', marginLeft: 16 }}>and</div>
                </Form.Group>

                <Form.Group controlId="formGroupEmail" style={commonstyles.formGroup}>
                    <Form.Label style={commonstyles.formLabel}>Value</Form.Label>
                    <Form.Control style={commonstyles.formControl} placeholder="" />
                    <div style={{ color: 'grey', fontStyle: 'italic', marginLeft: 16 }}>and</div>
                </Form.Group>

                <Form.Group controlId="formGroupEmail" style={commonstyles.formGroup}>
                    <Form.Label style={commonstyles.formLabel}>Tag</Form.Label>
                    <Form.Control style={commonstyles.formControl} placeholder="" />
                    <div style={{ color: 'grey', fontStyle: 'italic', marginLeft: 16, visibility: 'hidden' }}>and</div>
                </Form.Group>

                <Button style={{ backgroundColor: '#fff', fontSize: 16, fontWeight: 'bold', width: 100, color: Colors.newBlue, alignSelf: 'center', }} onClick={() => { this.setState({ showRulesModal: false }) }}>Add</Button>

            </div>
        )
    }

}

