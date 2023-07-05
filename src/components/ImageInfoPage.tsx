import { Skeleton, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import { ImagesContext } from "contexts/ImagesContextProvider";
import { FC, useContext, useMemo, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import CommentsSection from "components/CommentsSection";

const ImageInfoPage: FC = () => {
  const { imageName } = useParams();
  const { imagesData } = useContext(ImagesContext);
  const [isLoaded, setLoaded] = useState(false);

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
    <Box>
      <StyledWrapper>
        <StyledImageWrapper>
          {!isLoaded && (
            <Skeleton variant="rectangular" width={500} height={500} />
          )}
          <StyledImage
            src={imageUrl}
            alt={currentItem.name}
            onLoad={() => setLoaded(true)}
          />
        </StyledImageWrapper>

        <Box>
          <Typography mb={2} variant="h4">
            {currentItem.name}
          </Typography>
          <Typography>{currentItem?.description}</Typography>
        </Box>
      </StyledWrapper>
      <CommentsSection imageName={imageName} />
    </Box>
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
  objectFit: "scale-down",
});

const StyledImageWrapper = styled(Box)({
  width: 500,
  height: 500,
});
