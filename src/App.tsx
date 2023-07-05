import { useEffect, useState } from "react";
import { formatImagesData } from "helpers/formatImagesData";
import { ItemData } from "types";

function App() {
  const [data, setData] = useState<ItemData[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20")
      .then((response) => response.json())
      .then((json) => setData(formatImagesData(json)));
  }, []);

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
