import { useEffect, useState } from "react";
import { formatImagesData } from "helpers/formatImagesData";
import { ItemData } from "types";
import { Box, Typography, styled } from "@mui/material";
import ImageItem from "components/ImageItem";

function App() {
  const [data, setData] = useState<ItemData[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
      .then((response) => response.json())
      .then((json) => setData(formatImagesData(json)));
  }, []);

  return (
    <StyledAppWrapper>
      <StyledTitle variant="h4">Page title</StyledTitle>
      <StyledImagesWrapper>
        {data.map((imageItem) => (
          <ImageItem item={imageItem} />
        ))}
      </StyledImagesWrapper>
    </StyledAppWrapper>
  );
}

export default App;

const StyledAppWrapper = styled(Box)({
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
