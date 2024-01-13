import { Grid } from "@mui/material";
import { ReactNode } from "react";
import images from "../../../constant/images";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img src={images.amazon} alt="" />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
