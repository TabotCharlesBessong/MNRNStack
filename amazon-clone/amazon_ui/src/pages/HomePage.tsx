import { useEffect } from "react";
import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { user, jwt } = useAppSelector(selectedUser);

  useEffect(() => {
    console.log(123, user, jwt);
  }, [user]);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <h1>Home Page</h1>
      <a
        onClick={logoutHandler}
        style={{
          backgroundColor: "yellow",
          cursor: "pointer",
          height: "40px",
          width: "60px",
          padding: "8px",
        }}
      >
        Logout
      </a>
      {user ? (
        user?.email
      ) : (
        <h2>
          <Link to="/register">Signup</Link>
        </h2>
      )}
    </div>
  );
};
export default HomePage;
