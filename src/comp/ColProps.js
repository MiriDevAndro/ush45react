import React from 'react'
import { Col,Row } from 'react-bootstrap'

const ColProps = ({emri,lenda,kreditet}) => {
  return (
    <Row>
    <Col>
        <p>{emri}</p>
    </Col>
    <Col>
    <p>{lenda}</p>
</Col>
<Col>
        <p>{kreditet}</p>
    </Col>
    </Row>
  )
}

export default ColProps
