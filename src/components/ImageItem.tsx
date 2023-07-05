import { Box, styled } from "@mui/material";
import { FC } from "react";
import { ItemData } from "types";

interface ImageItemProps {
  item: ItemData;
}

const ImageItem: FC<ImageItemProps> = ({ item }) => {
  return (
    <STyledItemWrapper>
      <StyledImage src={item.url} alt={item.name} />
      <StyledName>{item.name}</StyledName>
    </STyledItemWrapper>
  );
};

export default ImageItem;

const STyledItemWrapper = styled(Box)({
  padding: 10,
  "&:hover": {
    cursor: "pointer",
  },
});

const StyledImage = styled("img")({
  width: 250,
  height: 250,
  objectFit: "scale-down",
});

const StyledName = styled("p")({
  textAlign: "center",
  maxWidth: 250,
  textOverflow: "ellipsis",
});
