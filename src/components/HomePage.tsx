import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import ImageItem from "components/ImageItem";
import { ImagesContext } from "contexts/ImagesContextProvider";

const HomePage = () => {
  const { imagesData, isLoading } = useContext(ImagesContext);

  console.log(isLoading);

  return (
    <StyledWrapper>
      <StyledTitle variant="h4">Page title</StyledTitle>
      <StyledImagesWrapper>
        {imagesData.map((imageItem) => (
          <ImageItem item={imageItem} />
        ))}
      </StyledImagesWrapper>
    </StyledWrapper>
  );
};

export default HomePage;

const StyledWrapper = styled(Box)({
  padding: "20px 15px",
});

const StyledImagesWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: 20,
});

const StyledTitle = styled(Typography)({
  marginBottom: 15,
  textAlign: "center",
});
