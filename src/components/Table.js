import './styling.css';

const Table = ({ sat }) => {

  return (
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
            let dataOperational = data.operational;
            let dataName = data.name;
            let dataType = data.type;
            let dataLaunchDate = data.launchDate;

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