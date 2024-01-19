import { useEffect } from "react";
import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";
import { Link } from "react-router-dom";
import { getProducts } from "../features/products/productSlice";
import { Product } from "../features/auth/components";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { cart, products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log({ products, cart });
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Home Page</h1>
      <div
        onClick={logoutHandler}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "48px",
        }}
      >
        {products.length > 0 &&
          products.map((product) => {
            <Product key={product._id} product={product} />;
          })}
      </div>
    </div>
  );
};
export default HomePage;
