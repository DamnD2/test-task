import { useContext } from "react";
import { Box, Skeleton, Typography, styled } from "@mui/material";
import ImageItem from "components/ImageItem";
import { ImagesContext } from "contexts/ImagesContextProvider";
import { skeletonArray } from "helpers/formatImagesData";

const HomePage = () => {
  const { imagesData, isLoading } = useContext(ImagesContext);

  return (
    <StyledWrapper>
      <StyledTitle variant="h4">Page title</StyledTitle>
      <StyledImagesWrapper>
        {isLoading
          ? skeletonArray.map((_, index) => (
              <Box key={index}>
                <Skeleton variant="rectangular" width={250} height={250} />
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              </Box>
            ))
          : imagesData.map((imageItem) => (
              <ImageItem item={imageItem} key={imageItem.name} />
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
