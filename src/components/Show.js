import React from 'react'
import useFetch from '../utilities/useFetch'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import fetchFunction from '../utilities/fetchFunction';
import { toast } from 'react-toastify';

export default function Show() {
    var userDetails = useFetch("/crud");

    function deleteData(ev,userid){
        var extra = {
            method: "DELETE",
        }
        fetchFunction("/crud/"+userid , extra )
        .then(res=>{
            // console.log(res);
            console.log(res.status);
            if(res.status){
                ev.target.parentNode.parentNode.remove();
                toast(res.message);
            }
        })
    }
  return (
    <Container>
        <h1> Show User </h1>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Place</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
        {
            userDetails && userDetails.length > 0 && userDetails.map(({_id,name,age,place})=>
                <tr>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{place}</td>
                    <td>
                        <Button onClick={(ev)=>{ deleteData(ev,_id) }}>Delete</Button>
                    </td>
                    <td>
                        <Link className='btn btn-primary' to={"/edit/"+_id}>Edit</Link>
                    </td>
                </tr>
            )
        }
      
      
    </tbody>
  </Table>
  </Container>
  )
}
