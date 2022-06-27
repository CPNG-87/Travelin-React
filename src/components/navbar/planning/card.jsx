import {Link} from "react-router-dom";


function Card() {

    return (
        <div className="col-sm-6 col-lg-4 mb-3">
            <div className="card shadow">
                <div className="card-body">
                    <h5 className="card-title">Liburan Ke Jakarta</h5>
                    <h6>Waktu : </h6>
                    <p>18/05/2022 - 20/05/2022</p>
                    <h6>Agenda : </h6>
                    <del>
                    <div className="form-check d-flex justify-content-between">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label className="form-check-label" for="flexCheckChecked">
                        Monas 
                        </label>
                        <p className="time">06.00 - 10.00</p>
                    </div>
                    </del>
                    <div className="form-check d-flex justify-content-between">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckdefault"/>
                        <label className="form-check-label" for="flexCheckdefault">
                        TMII
                        </label>
                        <p className="time">11.00 - 14.00</p> 
                    </div>
                    <div className="form-check d-flex justify-content-between mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckdefault1"/>
                        <label className="form-check-label text-start" for="flexCheckdefault1">
                        Grand Indonesia
                        </label>
                        <p className="time">15.00 - 19.00</p> 
                    </div>
                    <h6>Budget : </h6>
                    <h5 className="harga">Rp. 500.000</h5>
                </div>
                <div className="card-body mt-auto ms-auto">
                    {/* <a href="#/update-planning" className="btn btn-primary btn-sm">Update</a> */}
                    <Link to="update" className="btn btn-primary btn-sm">Update</Link>
                    <a href="#ok" className="btn btn-danger btn-sm">Delete</a>
                </div>
            </div>
        </div>            
    );
  }
  
  export default Card;
  