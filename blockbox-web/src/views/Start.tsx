import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";


interface StartStates { }

class Start extends Component<any, StartStates> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container className='start-container'>
                <Row>
                    <Col>
                        <p> React Bootstrap </p>
                    </Col>
                    <Col>
                        <p> React Bootstrap </p>
                    </Col>
                    <Col>
                        <p> React Bootstrap </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Start;
