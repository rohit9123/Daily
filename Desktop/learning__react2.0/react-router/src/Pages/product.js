import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>The products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A book 2</Link>
        </li>
        <li>
          <Link to="/products/p1">A book 3</Link>
        </li>
      </ul>
    </section>
  );
};
export default Product;
