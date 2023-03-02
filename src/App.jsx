import "./App.css";
import CollectionSlider from "./components/CollectionSlider";
import * as Collection from "../collection-data.json";

function App() {
  return (
    <CollectionSlider
      title={Collection.title}
      width={Collection.width}
      tiles={Collection.tiles}
    />
  );
}

export default App;
