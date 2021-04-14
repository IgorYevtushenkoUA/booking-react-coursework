import React from 'react';
import {observer} from "mobx-react-lite";
import {Col, ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = observer(() => {

    return (
       <Col md={3}>
           <ListGroup>
               <ListGroup.Item>F1</ListGroup.Item>
               <ListGroup.Item>F2</ListGroup.Item>
               <ListGroup.Item>F3</ListGroup.Item>
           </ListGroup>
       </Col>
    );
});

export default TypeBar;