import { Card, Table,Button, Navbar, Container, Nav, Modal } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { getPelajaran } from "../../connection/connections";
import { ShowModal } from "../helper_components/modal";
import { Navigation } from "./navigation";
import { TablePelajaran } from "./table_pelajaran";
import { TableUsers } from "./table_users";
const axios = require('axios').default;

function renderSwitch(params,list,setKeywords,setList,setShowModal) {
    const tablePelajaran = (list && <TablePelajaran list={list} setKeywords={setKeywords} setList={setList} setShowModal={setShowModal}/>)
    switch (params) {
        case 0:
            return(tablePelajaran)
        
        case 1:
            return(<TableUsers />)
    
        default:
            return(tablePelajaran)
    }
}

export const Home = ()=>{
    const [showList, setShowList] = useState(0)
    const [list, setList] = useState([])
    const [keywords, setKeywords] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [modalElements, setModalElements] = useState([<>no elements</>])
    useEffect(async()=>{
        getPelajaran(setList,"")
    },[])
    
    return(

        <div>
            
            <Navigation setShowList={setShowList} setList={setList} list={list}/>
            {renderSwitch(showList,list,setKeywords,setList,setShowModal)}
            <ShowModal showModal={showModal} setShowModal={setShowModal} elements={modalElements}/>
        </div>
    )
}



