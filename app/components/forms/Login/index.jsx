import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class FormLogin extends Component{
    render(){
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formLogin">
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default FormLogin;