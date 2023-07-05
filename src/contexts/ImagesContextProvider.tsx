import { formatImagesData } from "helpers/formatImagesData";
import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { ItemData } from "types";

export const ImagesContext = createContext<{
  imagesData: ItemData[];
  isLoading: boolean;
}>({ imagesData: [], isLoading: false });

const ImagesContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ItemData[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
      .then((response) => response.json())
      .then((json) => {
        setData(formatImagesData(json));
        setLoading(false);
      });
  }, []);

  return (
    <ImagesContext.Provider value={{ isLoading, imagesData: data }}>
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesContextProvider;
