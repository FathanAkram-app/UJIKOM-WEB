import { Card, Table,Button, Navbar, Container, Nav } from "react-bootstrap";
import React, { useState } from 'react';

function rendeSwitch(params) {
    switch (params) {
        case 0:
            return(<TablePelajaran/>)
        
        case 1:
            return(<TableUsers/>)
    
        default:
            return(<TablePelajaran/>)
    }
}

export const Home = ()=>{
    const [showList, setShowList] = useState(0)
    return(

        <div>
            <Navigation setShowList={setShowList}/>
            {rendeSwitch(showList)}
            
            
        </div>
    )
}

const Navigation = (props) =>{
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/home">Hadeer Admin</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>props.setShowList(0)}>Pelajaran</Nav.Link>
                    <Nav.Link onClick={()=>props.setShowList(1)}>Users</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
const TablePelajaran = ()=>{
    const rows = []
    
    for (const key in [1,2,3,4]) {
        rows.push(<TrPelajaran data={{index:1,namapelajaran:"test",jampelajaran:"test", kelas:"kelastest", guru:"gurutest", materi:"materitest"}}/>)
    }
    return (
        <Card style={{backgroundColor:"black",margin:"16px"}}>
            <input placeholder="Search.."></input>
            <Table striped bordered hover variant="dark">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nama Pelajaran</th>
                        <th>Jam Pelajaran</th>
                        <th>Kelas</th>
                        <th>Guru</th>
                        <th>Materi</th>
                        
                        <th>
                            <Button style={{margin:"0"}}variant="primary">Tambah User</Button>
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {rows}
                    
                </tbody>
            </Table>
        </Card>
    )
}

const TableUsers = ()=>{
    const rows = []
    
    for (const key in [1,2,3,4,5,6,7]) {
        rows.push(<TrUsers data={{index:key+1,username:"fathan",email:"test", roles:"kelastest", nama:"gurutest", kelas:"materitest"}}/>)
    }
    
    return (
        <Card style={{backgroundColor:"black",margin:"16px"}}>
            <input placeholder="Search.."></input>
            <Table striped bordered hover variant="dark">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>Nama Lengkap</th>
                        <th>Kelas</th>
                        
                        <th>
                            <Button style={{margin:"0"}}variant="primary">Tambah Pelajaran</Button>
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                    {rows}
                    
                    
                </tbody>
            </Table>
        </Card>
    )
}

const TrPelajaran = (props)=>{
    const data = props.data
    console.log(data)
    return(
        <tr>
            <td>{data.index}</td>
            <td>{data.namapelajaran}</td>
            <td>{data.jampelajaran}</td>
            <td>{data.kelas}</td>
            <td>{data.guru}</td>
            <td>{data.materi}</td>
            <td>
                <Button style={{margin:"0"}}variant="warning">edit</Button>
            </td>
        </tr>
    )
}
const TrUsers = (props)=>{
    const data = props.data
    return(
        <tr>
            <td>{data.index}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.roles}</td>
            <td>{data.nama}</td>
            <td>{data.kelas}</td>
            <td>
                <Button style={{margin:"0"}}variant="warning">edit</Button>
            </td>
        </tr>
    )
}
