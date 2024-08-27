import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ColProps from './ColProps'

function Table() {
    const petagogu=[
        {emri:"Beni",lenda:'Fizike',kreditet:100},
        {emri:"Beni",lenda:'Fizike',kreditet:100},
        {emri:"Beni",lenda:'Fizike',kreditet:100},
        {emri:"Beni",lenda:'Fizike',kreditet:100},
        {emri:"Beni",lenda:'Fizike',kreditet:100},
    ]
  return (
    <Container>
        <Row>
            <Col>
            <p>Emri</p>
            </Col>
            <Col>
            <p>Lenda</p>
            </Col>
            <Col>
            <p>Nr. Krediteve</p>
            </Col>
        </Row>
        {petagogu.map((val)=>{
            return(
                    <ColProps {...val}/>
               
                
            )
        }
        )}
    </Container>
  )
}

export default Table
