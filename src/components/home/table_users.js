import { Button, Card, Table } from "react-bootstrap"

export const TableUsers = ()=>{
    const rows = []
    
    for (const key in [1,2,3,4,5,6,7]) {
        rows.push(<TrUsers data={{index:key.toString(),username:"fathan",email:"test", roles:"kelastest", nama:"gurutest", kelas:"materitest"}}/>)
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


const TrUsers = (props)=>{
    const data = props.data
    return(
        <tr key={data.index}>
            <td>{data.index}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.roles}</td>
            <td>{data.nama}</td>
            <td>{data.kelas}</td>
            <td>
                <Button style={{margin:"0"}}variant="warning">edit</Button>
                <Button style={{margin:"0"}}variant="danger">Delete</Button>
            </td>
        </tr>
    )
}