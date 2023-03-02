import "./App.css";
import CollectionSlider from "./components/CollectionSlider";
import * as CollectionData from "../collection-data.json";

function App() {
  return (
    <CollectionSlider
      title={CollectionData.title}
      width={CollectionData.width}
      tiles={CollectionData.tiles}
    />
  );
}

export default App;
