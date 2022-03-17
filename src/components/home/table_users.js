import { useEffect } from "react"
import { Button, Card, Table } from "react-bootstrap"
import { getUsers } from "../../connection/connections"

export const TableUsers = (props)=>{
    useEffect(()=>{
        getUsers(props.setList, "")
    },[])
    const rows = []
    const data = props.list
    console.log(data)
    for (const key in data) {
        rows.push(<TrUsers key={key} data={{index: key.toString(),username:data[key].username,email:data[key].email, roles:data[key].roles, nama:data[key].nama, kelas:data[key].kelas}}/>)
    }
    return (
        <Card style={{backgroundColor:"black",margin:"16px"}}>
            <input placeholder="Search.." 
                onChange={(e)=>{
                    getUsers(props.setList,e.target.value)
                }}
            ></input>
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

function renderRoles(role) {
    console.log(role)
    switch (role) {
        case "1":
            return (<td>Siswa</td>)
        case "2":
            return (<td>Guru</td>)
        case "3":
            return (<td></td>)
        case "4":
            return (<td>Admin</td>)
        
    
        default:
            return (<td>Siswa</td>)
    }
}
const TrUsers = (props)=>{
    const data = props.data
    

    
    return(
        <tr key={data.index}>
            <td>{data.index}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            {renderRoles(data.roles)}
            <td>{data.nama}</td>
            <td>{data.kelas}</td>
            <td>
                <Button style={{margin:"0"}}variant="warning">edit</Button>
                <Button style={{margin:"0"}}variant="danger">Delete</Button>
            </td>
        </tr>
    )
}