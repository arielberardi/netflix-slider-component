import "./App.css";
import CollectionSlider from "./components/CollectionSlider";

const collectionTitle = "Tendencias";
const collectionWidth = 4;
const collections = [
  {
    img_url: "https://via.placeholder.com/210/00FF00?text=1",
    id: 1,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/220/00FF00?text=2",
    id: 2,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/230/00FF00?text=3",
    id: 3,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/240/00FF00?text=4",
    id: 4,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/250/00FF00?text=5",
    id: 5,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/260/00FF00?text=6",
    id: 6,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/270/00FF00?text=7",
    id: 7,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/280/00FF00?text=8",
    id: 8,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/290/00FF00?text=9",
    id: 9,
    titel: "",
  },
  {
    img_url: "https://via.placeholder.com/290/00FF00?text=10",
    id: 10,
    title: "",
  },
  {
    img_url: "https://via.placeholder.com/290/00FF00?text=11",
    id: 11,
    title: "",
  },
  {
    img_url: "https://via.placeholder.com/290/00FF00?text=12",
    id: 12,
    title: "",
  },
];

function App() {
  return (
    <CollectionSlider
      title={collectionTitle}
      width={collectionWidth}
      data={collections}
    />
  );
}

export default App;
