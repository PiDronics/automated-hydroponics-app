import React, {Component} from 'react';
import { Card, CardBody, CardTitle, Badge } from 'mdbreact';
import ModalConfig from "../modal/ModalConfig";

/**
 * @class SystemCardConfig
 * @desc Renders a single card containing basic Configuration info about a Pi.
 */
class SystemCardConfig extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="col-lg-6 mb-3">
                <Card>
                    <CardBody>
                        <CardTitle className="justify-content-center d-flex">{this.props.name}</CardTitle>
                        <h6 className="d-flex justify-content-around"><span>Update Interval: </span><Badge color="cyan">{this.props.time} Minutes</Badge></h6>
                        <ModalConfig name={this.props.name} time={this.props.time} system={this.props.system}/>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default SystemCardConfig;