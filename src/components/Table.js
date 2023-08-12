/* Created by: Grayson Cummins
   Date: 12 August 2023

   Table will use a prop sat that was created in App
   Table will return the table with the satellite information from whatever button was pressed
   The satellite information will be provided from a .map function and data prop
*/
import './styling.css';

//sat prop that was created in App to provide the satellite data
const Table = ({ sat }) => {

  return (
    //table with satellite information ('name', 'type of satellite', 'launch date', 'status')
      <table>
       <thead>
        <tr>
          <th>Name:</th>
          <th>Type of Satellite:</th>
          <th>Launch Date:</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => {
            //prop data is created in App
            //data is the satellite data in satData.js

            //create variable with the satellite name 
            let dataName = data.name;

            //create variable with the satellite type
            let dataType = data.type;

            //create variable with the satellite launchDate
            let dataLaunchDate = data.launchDate;

            //create variable to find if the satellite is active or inactive
            //will use a conditional to display 'active' or 'inactive'
            let dataOperational = data.operational;

            return (
              <tr>
                <td>{dataName}</td>
                <td>{dataType}</td>
                <td>{dataLaunchDate}</td>
                <td>{dataOperational ? 'active' : 'inactive'}</td>
              </tr>
            );
          })};
        </tbody>
      </table>
  );
};

export default Table;