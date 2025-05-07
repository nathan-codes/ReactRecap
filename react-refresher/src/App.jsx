import "./App.css";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import Property from "./Property";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ColorBox from "./ColorBox";
import ColorGrid from "./ColorGrid";



const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#C0C0C0",
  "#808080",
  "#800000",
  "#808000",
  "#008000",
  "#800080",
  "#008080",
  "#000080",
  "#FFA500",
  "#FF4500",
  "#FF1493",
  "#DA70D6",
  "#FF69B4",
  "#4B0082",
];

function App() {
  return (
    <>
      {/* <Die numSides={20} />
      <Die numSides={6}  />
      <Die  /> */}
      {/* <ListPicker list={[1,2,3,4,5]} /> */}
      {/* <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <Heading color="teal" text="What's upppppp" fontSize="20px" />
      <ColorList colors={["blue","red","teal","yellow"]}/> */}

      {/* <Slots val1="d" val2="d" val3="d"  /> */}
      {/* <h1>Checking Property List </h1>
      <PropertyList properties={properties} /> */}
      {/* <Clicker buttonText="Please click me" /> */}
      {/* <Counter /> */}
      {/* <Toggler /> */}
      <ColorBox colorList={colors} />
      <ColorGrid colorList={colors}/>
      
    </>
  );
}

export default App;
