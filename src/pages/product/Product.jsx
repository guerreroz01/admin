import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {data} from "./data"

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
          <div className="productTop">
              <div className="productTopLeft">
                  <Chart data={data} dataKey="Sales" title="Sales Performance"/>
                  </div>
                  <div className="productTopRight"></div>
              </div>
      <div className="productBottom"></div>
    </div>
  );
}
