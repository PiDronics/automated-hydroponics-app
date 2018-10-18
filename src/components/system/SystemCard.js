import React from 'react';
import { Card, CardBody, CardTitle, CardText, Fa, Button, Badge } from 'mdbreact';
import { NavLink } from 'mdbreact';

const SystemCard = ({system}) => {
    var sensors = Object.keys(system.sensors);
    return (
        <div className="col-lg-6 systemCard">
            <Card>
                <CardBody>
                    <CardTitle className="justify-content-center d-flex">{system.systemName}</CardTitle>
                    <CardText>Connected Sensors: </CardText>
                    <div className="">
                        {sensors.map(sensor =>{
                            if(system.sensors[sensor].enabled){
                                var status;
                                switch(system.sensors[sensor].status){
                                    case 1:
                                    case 2:
                                        status = "red";
                                        break;

                                    case 3:
                                    case 4:
                                    case 5:
                                        status = "yellow";
                                        break;

                                    case 6:
                                    case 7:
                                    case 8:
                                        status = "lime accent-2";
                                        break;

                                    case 9:
                                    case 10:
                                        status = "light-green accent-3";
                                        break;

                                    default:
                                        status = "info";
                                        break;
                                }
                                return(
                                    <Button className="p-2" color={status} key={sensor}>{sensor}<Badge className="ml-2" color="info" pill>{system.sensors[sensor].current}</Badge></Button>
                                )
                            }
                            else{
                                return(
                                    <Button className="p-1 text-black-50" color="" key={sensor}>{sensor}<Fa className="ml-1" icon="ban"/> </Button>
                                )
                            }
                        })}
                    </div>
                    <CardText></CardText>
                    <CardText>Last Updated: {system.lastUpdated}</CardText>
                    <NavLink to={"/system/"+system.systemId} className="lighten-3 mdb-color text-white"><div className="d-flex align-items-center text-white"><span className="flex-grow-1">View System Information</span><Fa icon="chevron-right"></Fa></div></NavLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default SystemCard;
