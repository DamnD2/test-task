import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => (
  <StyledWrapper>
    <Typography variant="h5">Oops! Something went wrong.</Typography>
    <Link to="/">Go to home page</Link>
  </StyledWrapper>
);

export default ErrorPage;

const StyledWrapper = styled(Box)({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
