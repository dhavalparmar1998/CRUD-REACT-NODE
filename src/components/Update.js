import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../utilities/useFetch';
import Container from 'react-bootstrap/Container';
import fetchFunction from '../utilities/fetchFunction';
import { toast } from 'react-toastify';

export default function Update() {
    const {userid} = useParams();
    // console.log(userid);
    let navigate = useNavigate();

    let userDetails = useFetch("/crud/"+userid , [userid]);
    console.log(userDetails);
    
    var x1 = useRef();
    var x2 = useRef();
    var x3 = useRef();
    function updateData(){
        var userdata = {
            name:x1.current.value,
            age:x2.current.value,
            place:x3.current.value,
        }

        var extra = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(userdata)
        }
        fetchFunction("/crud/"+userid,extra)
        .then((res)=>{
            console.log(res);
            console.log(res.message);
    
            toast(res.message);
            navigate("/");
            
        })
    }
  return (
    <Container>
        <h1> Show User </h1>
        {
            userDetails && Object.keys(userDetails).length > 0 && (
                <>
                    <input ref={x1} type="text" className='form-control' defaultValue={userDetails.name} /> <br />
                    <input ref={x2} type="text" className='form-control' defaultValue={userDetails.age} /> <br />
                    <input ref={x3} type="text" className='form-control' defaultValue={userDetails.place} /> <br />
                    <button onClick={()=>{updateData()}}>Update</button>
                </>

            )
        }
    </Container>
  )
}
