import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Right from './Right';
import { useDispatch } from 'react-redux';
import { transferData } from '../redux/slices/crudSlice';

export default function Search() {

    let dispatch = useDispatch();

    function filterRecord(ev){
        // console.log(ev.target.innerText);
        dispatch(transferData(ev.target.innerText))
    }
  return (
    <Container>
        <h1> Filter User </h1>
        <Row>
            <Col xs={3}>
                <ul>
                    <li onClick={(ev)=>{filterRecord(ev)}}>pune</li>
                    <li onClick={(ev)=>{filterRecord(ev)}}>mumbai</li>
                    
                </ul>
            </Col>
            <Col xs={3}>
                <Right />
            </Col>
        </Row>
    </Container>
  )
}
