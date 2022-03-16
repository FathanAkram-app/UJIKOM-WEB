import { Button, Modal } from "react-bootstrap"

export const ShowModal = (props)=>{
    return ( 
        <Modal show={props.showModal} backdrop="static" style={{position: 'fixed',top:0,right:0,left:0,bottom:0}}>
            <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                {props.elements}
            </Modal.Body>
        
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.setShowModal(false)}>Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}