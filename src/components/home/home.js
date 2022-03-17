
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPelajaran, getUsers } from "../../connection/connections";
import { tokenCookies } from '../helper_components/authentication';
import { ShowModal } from "../helper_components/modal";
import { Navigation } from "./navigation";
import { TablePelajaran } from "./table_pelajaran";
import { TableUsers } from "./table_users";

function renderSwitch(params,list,setList,setShowModal) {
    const tablePelajaran = (list && <TablePelajaran list={list}  setList={setList} setShowModal={setShowModal}/>)
    const tableUsers = (list && <TableUsers list={list}  setList={setList} setShowModal={setShowModal}/>)
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
    
    
    return(

        <div>
            
            <Navigation setShowList={setShowList} setList={setList} list={list}/>
            {renderSwitch(showList,list,setList,setShowModal)}
            <ShowModal showModal={showModal} setShowModal={setShowModal} elements={modalElements}/>
        </div>
    )
}



