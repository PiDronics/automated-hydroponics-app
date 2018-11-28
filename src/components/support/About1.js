import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText,
Button } from "mdbreact";

class MultiCarouselPage extends Component {
  render() {
    return (
      <Container>
        <Carousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
          <CarouselInner>
           
              <CarouselItem itemId="1">
              <Row>
                <Col md="6">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="/img/t1.jpeg" />
                  <CardBody>
                    <CardTitle>Michael Ali - 814005475</CardTitle>
                    <CardText>
                        Designer, frontend/backend software engineer, hardware engineer.
                    </CardText>
                    <Button href="https://github.com/irontarkus95" target="_blank" rel="noopener noreferrer" color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="6" className="clearfix ">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="/img/t2.jpeg" />
                  <CardBody>
                    <CardTitle>Gabriela Sewdhan - 813001696</CardTitle>
                    <CardText>
                        Designer, frontend/backend software engineer, hardware engineer.
                    </CardText>
                    <Button target="_blank" href="https://github.com/princesszelda94" rel="noopener noreferrer" color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                </Row>
              </CarouselItem>
              <CarouselItem itemId="2">
              <Row>
                <Col md="6">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="/img/kristan.jpg" />
                  <CardBody>
                    <CardTitle>Kristan Birbalsingh - 816003409</CardTitle>
                    <CardText>
                        Designer, frontend/backend software engineer.
                    </CardText>
                    <Button target="_blank" href="https://github.com/KCB4Rockstar" rel="noopener noreferrer" color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                <Col md="6" className="clearfix d-none d-md-block">
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="/img/qarun.jpg" />
                  <CardBody>
                    <CardTitle>Qarun Bissoondial - 816002009</CardTitle>
                    <CardText>
                        Designer, frontend/backend software engineer, business analyst/project manager, Software Testor.
                    </CardText>
                    <Button target="_blank" href="https://github.com/Qarun-Qadir-Bissoondial" rel="noopener noreferrer" color="primary">Button</Button>
                  </CardBody>
                </Card>
                </Col>
                </Row>
              </CarouselItem>
           
          </CarouselInner>
        </Carousel>
      </Container>
      );
    }
  }

export default MultiCarouselPage;