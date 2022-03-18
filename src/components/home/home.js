
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addPelajaran, getPelajaran, getUsers } from "../../connection/connections";
import { tokenCookies } from '../helper_components/authentication';
import { modalElementsUser, ShowModal } from "../helper_components/modal";
import { Navigation } from "./navigation";
import { TablePelajaran } from "./table_pelajaran";
import { TableUsers } from "./table_users";

function renderSwitch(params,list,setList,setShowModal,setModalElements,setDataForms,dataForms) {
    const tablePelajaran = (list && <TablePelajaran setDataForms={setDataForms} dataForms={dataForms} list={list}  setList={setList} setShowModal={setShowModal} setModalElements={setModalElements}/>)
    const tableUsers = (list && <TableUsers list={list}  setList={setList} setShowModal={setShowModal} setModalElements={setModalElements}/>)
    switch (params) {
        case 0:
            return(tablePelajaran)
        case 1:
            
            return(tableUsers)
        default:
            return(tablePelajaran)
    }
}

export const Home = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        if (tokenCookies().length < 3) {
            navigate('/login')
        }
        
    })
    const [showList, setShowList] = useState(0)
    const [list, setList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalElements, setModalElements] = useState([<div key="1">no elements</div>])
    const [dataForms, setDataForms] = useState({})
    
    return(

        <div>
            
            <Navigation setShowList={setShowList} setList={setList} list={list}/>
            {renderSwitch(showList,list,setList,setShowModal,setModalElements,setDataForms,dataForms)}
            <ShowModal showModal={showModal} setShowModal={setShowModal} elements={modalElements} buttons={showList != 1? [<Button key="btn" variant="primary" onClick={()=>{addPelajaran(dataForms)}}>Save changes</Button>]: null}/>
        </div>
    )
}



