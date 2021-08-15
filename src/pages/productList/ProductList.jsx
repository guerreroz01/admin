import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "./productData";
import { useState } from "react";
import { DeleteForever } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleClick = (id) => {
    setData(
      data.filter((element) => {
        return element.id !== id;
      })
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Product",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img src={params.row.img} alt="" className="productListImage" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "status",
      width: 120,
    },
    {
      field: "price",
      headerName: "price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteForever
              className="productListDelete"
              onClick={() => handleClick(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}



