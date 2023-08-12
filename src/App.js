/* Created by: Grayson Cummins
   Date: 12 August 2023

   Create a react app for satellites in orbit around the earth
   There will be three files that contribute mostly to the compents in the app
   Banner will create the header banner that diaplays the title and the information about the app
   Buttons will provide the dynamic buttons for the user to click on 
   Buttons will display the correct satellite corresponding to the button pressed (low orbit, medium orbit, high orbit, and all orbits)
   Table will display the satelittle from the button the user pressed
   Table will correspond with the button the user pressed
*/

import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner.js"
import { useState } from "react";
import satData from "./components/satData.js";

function App() {
const [sat, setSat] = useState(satData);
const displaySats = [...new Set(satData.map((data) => data.orbitType))];
const filterByType = (currentType) => {
  const displaySats = satData.filter((newSatDisplay) => {
    return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats);
};
  return (
    <div>
      <Banner />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table  sat={sat} />
    </div>
  );
}

export default App;
