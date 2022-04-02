import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import { DispatchContext } from '../../App'
import './logout.css'
const Logout = () => {

    const dispatch=useContext(DispatchContext);
    const navigate=useNavigate();
    
    const handleYes=()=>{
        sessionStorage.clear("token");
        dispatch({
            type:"LOGOUT",
            item:null,
        });

        navigate("/");
    }

    const handleNo=()=>{
        navigate(-1);
    }



  return (
    <Container>
        <Row>
            <Col>
                <fieldset>
                    <h1>Are you really want to logout</h1>
                    <Button
                      color="primary"
                      className="button"
                      onClick={handleYes}
                    >Yes</Button>

                    <Button
                      color="secondary"
                      className="button"
                      onClick={handleNo}
                    >No</Button>
                </fieldset>
            </Col>
        </Row>

    </Container>
  )


}

export default Logout;