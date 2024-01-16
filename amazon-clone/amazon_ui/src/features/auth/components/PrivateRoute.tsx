import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { verifyJwt } from "../authSlice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  const { isSuccess, isAuthenticated, jwt } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!jwt || !jwt?.token) return;
    dispatch(verifyJwt(jwt.token));
  }, [jwt, isSuccess]);
  return isAuthenticated ? page : <Navigate replace to="/signin" />;
};

export default PrivateRoute;
