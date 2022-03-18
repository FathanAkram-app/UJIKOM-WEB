import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap"
import TimePicker from 'react-bootstrap-time-picker';
import { addPelajaran } from "../../connection/connections";

export const ShowModal = (props)=>{
    return ( 
        <Modal show={props.showModal} backdrop="static" style={{position: 'fixed',top:0,right:0,left:0,bottom:0}}>
            

        
            <Modal.Body>
                {props.elements}
            </Modal.Body>
        
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.setShowModal(false)}>Close</Button>
                {props.buttons}
            </Modal.Footer>
        </Modal>
    )
}





export const modalForms = (inputs,type,setDataForms,dataForms)=>{
    var arr = []
    arr.push(<h1 key="header">{type}</h1>)
    for (const key in inputs) {
        const ip = (key !="waktu" ?(key!="password" ? "text" : "password") : "time" )
        arr.push(input(key,ip,setDataForms, dataForms))
        if (ip == "time") {
            arr.push(input("tanggal","date",setDataForms, dataForms))
            
        }
    }
    return (
        <Form className="form">
            {arr}
            
        </Form>
    )
}
const timeCalculation = (e)=>{
    const c = e/3600
    const s = parseInt(Math.floor(c)).toString()
    const m = (c - Math.floor(c))*60
    const ml = m.toString().length
    const mll = (ml>1? m.toString() : "0"+m.toString())
    if(s.length>1){
        return Math.floor(c)+":"+mll+":00"
    }else{
        return "0"+Math.floor(c)+":"+mll+":00"
    }
}

const dateToday = ()=>{
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '-' + mm + '-' + dd;
}
const input = (label,inputType,setDataForms,dataForms)=>{
    return(
        <Form.Group key={label} className="formgroup" controlId="formBasicEmail">
            <Form.Label>{label.replace("_", " ")}</Form.Label>
            <Form.Control type={inputType} placeholder={"Enter "+label.replace("_", " ")} onChange={(e)=>{
                const data = dataForms
                data[label] = e.target.value
                setDataForms(dataForms)
                console.log(dataForms)}}/>
            
        </Form.Group>
    )
    
    
}
