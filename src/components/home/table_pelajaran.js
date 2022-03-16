import { Button, Card, Table } from "react-bootstrap"
import { getPelajaran } from "../../connection/connections"

export const TablePelajaran = (props)=>{
    const rows = []
    const data = props.list
    console.log(data)
    
    for (const key in data) {
        rows.push(<TrPelajaran data={{index: key.toString(),namapelajaran:data[key].nama,jampelajaran:data[key].waktu, kelas:data[key].kelas, guru:data[key].nama_guru, materi:data[key].materi}}/>)
    }
    return (
        <Card style={{backgroundColor:"black",margin:"16px"}}>
            <input placeholder="Search.." onChange={(e)=>{
                props.setKeywords(e.target.value)
                getPelajaran(props.setList,e.target.value)
            }}></input>
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
                            <Button onClick={()=>props.setShowModal(true)} style={{margin:"0"}}variant="primary">Tambah User</Button>
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
    return(
        <tr key={data.index}>
            <td>{data.index}</td>
            <td>{data.namapelajaran}</td>
            <td>{data.jampelajaran}</td>
            <td>{data.kelas}</td>
            <td>{data.guru}</td>
            <td>{data.materi}</td>
            <td>
                <Button style={{margin:"0"}}variant="warning">edit</Button>
                <Button style={{margin:"0"}}variant="danger">Delete</Button>
            </td>
        </tr>
    )
}