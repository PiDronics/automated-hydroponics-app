import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class ModalGraph extends Component {
    state = {
        modal: false
    };
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <Container>
                {/* BUTTON */}
                <Button color="info" onClick={this.toggle}>View Graph</Button>
                {/* MODAL */}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Feature Coming Soon</ModalHeader>
                    <ModalBody>
                        A graph will be here.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default ModalGraph;