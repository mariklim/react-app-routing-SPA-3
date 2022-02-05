import { useParams } from "react-router-dom";

function Product(){
  let {productName} = useParams();
  return(
      <div>
          <a href="/products">Torna indientro</a>
          <h1>{productName}</h1>
      </div>
  );
       
    
}
export default Product;