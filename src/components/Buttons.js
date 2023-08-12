/* Created by: Grayson Cummins
   Date: 12 August 2023

   Buttons will display four buttons dynamically
   Three buttons (dynamic buttons) will be provided from props created in Apps ('low orbit, medium orbit, high orbit')
   One button (all) will be created to display 'all orbits'
   The dynamic buttons will use the prop 'filterByType' to filter through the satData.js to display the corresponding data from the button pressed
   The all button will just provide all the data whenever the button is pressed
*/

import satData from "./satData";
import './styling.css';

//creating the buttons from the props created in App
//props used throughout are 'filterByType', 'setSat', 'displaySats'
const Buttons = ({filterByType, setSat, displaySats}) => {
  
  //use .map method with call backs 'sat' and 'id' and iterate over the displaySats
  // .map will return the buttons ('low orbit', 'medium orbit', 'high orbit')
  //when low orbit is clicked it will call upon the filterByType function 
  
  //the second button will will point to the setSat to display all the satellite data
  //data is from satData.js 
  //button called 'all orbits'
  return (
    <div className ='flex-container'>
  {displaySats.map((sat, id) => {
    return (
      <button onClick ={() => filterByType(sat)} key = {id}>
      {sat} Orbit
      </button>
      );
  })}
      <button onClick={() => setSat(satData)}> All Orbits</button>
    </div>
  );
};

export default Buttons;