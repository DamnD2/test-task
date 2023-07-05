import { FC } from "react";
import { useParams } from "react-router-dom";

const ImageInfoPage: FC<any> = () => {
  let { imageName } = useParams();

  return <div></div>;
};

export default ImageInfoPage;
