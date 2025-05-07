import "./App.css";
import Clicker from "./Clicker";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

import Die from "./Die";
import Greeter from "./Greeter,";
import ListPicker from "./ListPicker";
import PropertyList from "./PropertyList";
import Slots from "./Slots";

// const properties = [
//   {
//     id: 1234,
//     name: "Desert Yurt",
//     rating: 23.9,
//     price: 150,
//   },
//   {
//     id: 34,
//     name: "Miang zas",
//     rating: 4.9,
//     price: 150,
//   },
//   {
//     id: 567567,
//     name: "NIIII  ",
//     rating: 789.9,
//     price: 150,
//   },
//   {
//     id: 345212,
//     name: "kooo  ",
//     rating: 4444.95,
//     price: 150,
//   },
// ];

const hexColors = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6",
  "#1ABC9C", "#E67E22", "#E74C3C", "#2ECC71", "#3498DB",
  "#7F8C8D", "#34495E", "#16A085", "#27AE60", "#2980B9",
  "#8E44AD", "#D35400", "#C0392B", "#BDC3C7", "#2C3E50"
];
function App() {
  return (
    <>
      {/* <Greeter person="Bill" from="Colt" />
      <Greeter person="Ted" from="Colt" />
      <Greeter person="Rosa" from="Elton" /> */}

      {/* Die Rolls */}
      {/* <Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} /> */}

      {/* List Picker */}
      {/* <ListPicker values={[1, 2, 3, 4]} /> */}

      {/* Slots */}
      {/* <Slots val1="W" val2={"W"} val3={"W"} />
      <Slots val1="W" val2={"W"} val3={"Wa"} /> */}

      {/* Propert List */}
      {/* <PropertyList properties={properties} /> */}

      {/* Clicker */}
      {/* <Clicker buttonText={"Do not Click Me"} message={"Please Stop Clicking Me"}/>
       */}

      <ColorBoxGrid colors={hexColors} boxNum={50}/>

      <h1>sds</h1>
    </>
  );
}

export default App;
