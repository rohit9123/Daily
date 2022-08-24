import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          key={1}
          id={1}
          description="This is a first product - amazing!"
        />
        <ProductItem
          title="OK"
          price={7}
          key={2}
          id={2}
          description="this is second product"
        />
      </ul>
    </section>
  );
};

export default Products;
