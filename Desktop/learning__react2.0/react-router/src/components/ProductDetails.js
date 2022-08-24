import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const id = params.productId;
  return (
    <section>
      <h1>The products details</h1>
      <p>{id}</p>
    </section>
  );
};
export default ProductDetails;
