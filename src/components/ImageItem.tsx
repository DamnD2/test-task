import { styled } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ItemData } from "types";

interface ImageItemProps {
  item: ItemData;
}

const ImageItem: FC<ImageItemProps> = ({ item }) => {
  return (
    <STyledItemWrapper to={`details/${item.name}`}>
      <StyledImage src={item.url} alt={item.name} />
      <StyledName>{item.name}</StyledName>
    </STyledItemWrapper>
  );
};

export default ImageItem;

const STyledItemWrapper = styled(Link)({
  padding: 10,
  textDecoration: "none",
  color: "#000",
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
