import React from "react";
import { Link } from "react-router-dom";

import { getAllCity } from "../../apis/city";

const selectStyle = {
  textAlign: "center",
}

const customSelect = {
  width: "150px",
  padding: "10px 5px",
  backgroundColor: "DodgerBlue",
  border: "1px solid transparent",
  color: "white",
  borderRadius: "3px"
}

const container = {
  width: "200px",
}


function SideNav({ onSetCity }) {

  const [dataCity, setDataCity] = React.useState([]);

  React.useEffect(() => {
    let setData = setDataCity;
    getAllCity().then((data) => {
      setData(data.data);
    });
    return () => { };
  }, [setDataCity]);

  return (
    <div style={container} id="side_nav">
      <div className="text-center p-5 mt-3">
      </div>
      <div style={selectStyle}>
        <select onChange={onSetCity} style={customSelect}>
          {
            dataCity && Array.isArray(dataCity) && dataCity.length > 0 ?
              dataCity.map((item, index) => {

                return (
                  <option value={item.id} key={index}>
                    {item.city}
                  </option>
                );
              }) : (
                <option value='-1'>
                  No data
                </option>
              )
          }
        </select>
      </div>
      <ul className="list-unstyled px-4 d-grid gap-3">
        <hr className="mx-1" />
        <li className=""><Link to="/" className="text-decoration-none d-block"><i className="fa-solid fa-house"></i>&ensp; Home</Link></li>
        <li className=""><Link to="travel" className="text-decoration-none d-block"><i className="fa-solid fa-compass"></i>&ensp; Map</Link></li>
        <hr className="mx-1" />
        <li className=""><Link to="planning" className="text-decoration-none d-block"><i className="fa-solid fa-heart"></i>&ensp; Planning</Link></li>
      </ul>
    </div>
  );
}

export default SideNav;
