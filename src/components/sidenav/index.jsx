import React from "react";
import {Link} from "react-router-dom";

import {getAllCity} from "../../apis/city";

function SideNav({onSetCity}) {

  const [dataCity,setDataCity]=React.useState([]);

  React.useEffect(()=>{
      let setData=setDataCity;
      getAllCity().then((data)=>{
        setData(data.data);
      });
      return ()=>{};
    },[setDataCity]);
  
  return (
    <div className="sidebar shadow" id="side_nav">
        <div className="text-center p-5">
            <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg" alt="gambar" className="img-fluid rounded-circle p-1 shadow"/>
            <h5 className="name mt-4 text-primary">Ariana Caruso</h5>
        </div>

        <div className="search-box shadow">
            <i className="fa-solid fa-magnifying-glass"></i>
            <select onChange={onSetCity}>
              {
                dataCity&&Array.isArray(dataCity)&&dataCity.length>0?
                dataCity.map((item,index)=>{

                  return (
                    <option value={item.id} key={index}>
                      {item.city}
                    </option>
                  );
                }):(
                  <option value='-1'>
                    No data
                  </option>
                )
              }
            </select>
            {/* <input type="text" placeholder="Search Travelin" onChange={onSetCity} /> */}
        </div>

        <ul className="list-unstyled px-4 d-grid gap-3">
            <hr className="mx-1" />
            <li className=""><Link to="/" className="text-decoration-none d-block"><i className="fa-solid fa-house"></i>&ensp; Home</Link></li>
            <li className=""><Link to="travel" className="text-decoration-none d-block"><i className="fa-solid fa-compass"></i>&ensp; Travel</Link></li>
            <li className=""><Link to="food" className="text-decoration-none d-block"><i className="fa-solid fa-utensils"></i>&ensp; Food</Link></li>
            <hr className="mx-1"/>
            <li className=""><Link to="planning" className="text-decoration-none d-block"><i className="fa-solid fa-heart"></i>&ensp; Planning</Link></li>
        </ul>
    </div>
  );
}

export default SideNav;
