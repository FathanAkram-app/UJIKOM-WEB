import { Button, Card, Form } from "react-bootstrap";

export const Login = ()=>(
    <div style={{width:"100%", height:"100%"}}>
        <Card className="logincard">
            
            <Form className="form">
                <h1>Hadeer Admin</h1>
                <Form.Group className="formgroup" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="formgroup" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div style={{marginTop: 'auto',color:'grey'}}>© Hadeer Attendance</div>
        </Card>
        
    </div>
)
