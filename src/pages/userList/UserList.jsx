import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { rows } from "./data"
import { useState } from "react"
import { DeleteForever } from "@material-ui/icons";
import { Link } from "react-router-dom";




export default function UserList() {

    const [userRows, setUserRow] = useState(rows)

    const handleClick = (id => {
        setUserRow(userRows.filter(element => {
            return element.id !== id
        }))
    })

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        {
            field: "user",
            headerName: "User",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={process.env.PUBLIC_URL + params.row.avatar} alt="" className="userListImage" />
                        {params.row.user}
                    </div>
                );
            },
        },
        {
            field: "email",
            headerName: "email",
            width: 200,
        },
        {
            field: "status",
            headerName: "status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "transaction",
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/users/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteForever className="userListDelete" onClick={() => handleClick(params.row.id)} />
                    </>
                );
            },
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={userRows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}