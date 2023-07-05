import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ImagesContext } from "contexts/ImagesContextProvider";
import { FC, useContext, useMemo } from "react";
import { redirect, useParams } from "react-router-dom";

const ImageInfoPage: FC = () => {
  const { imageName } = useParams();
  const { imagesData } = useContext(ImagesContext);

  const currentItem = useMemo(
    () => imagesData.find((item) => item.name === imageName),
    [imageName, imagesData]
  );

  const imageUrl = useMemo(
    () => currentItem?.url.replace("250", "500"), // set bigger image size
    [currentItem]
  );

  if (!currentItem) {
    redirect("/");
  }

  return !!currentItem ? (
    <StyledWrapper>
      <StyledImage src={imageUrl} alt={currentItem.name} />
      <Box>
        <Typography mb={2} variant="h4">
          {currentItem.name}
        </Typography>
        <Typography>{currentItem?.description}</Typography>
      </Box>
    </StyledWrapper>
  ) : null;
};

export default ImageInfoPage;

const StyledWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 40,
  padding: "20px 15px",
});

const StyledImage = styled("img")({
  width: 500,
  height: 500,
  objectFit: "scale-down",
});
