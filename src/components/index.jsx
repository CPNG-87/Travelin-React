import axios from "axios";
import { useState, useEffect } from "react";
import DetailBar from "./../components/navbar/detail/index"

function Home() {
    const [dataDestinations, setDataDestinations] = useState([]);
    let [openModal, setOpenModel] = useState(false);
    let [destinations, setDestinations] = useState({});

    const getDestinations = () => {
        axios.get("http://localhost:5000/destination")
            .then(response => {
                setDataDestinations(response.data.data)
            })
    }

    useEffect(() => {
        getDestinations()
    }, [])

    return (
        <div className="card ms-4 mt-3 me-4 p-4 shadow">
            <div className="card-title text-center">
                <h2 className="mt-3">HOME</h2>
            </div>
            {openModal && <DetailBar closeModal={setOpenModel} destination={destinations} />}

            <div className="container">
                <h4>Vacations</h4>
                <div className="row flex-wrap allcard">
                    {dataDestinations.filter(destination => destination.is_food === false).map((item, i) => {
                        return <div key={i} className="col-sm-6 col-lg-3">
                            <div className="card shadow mt-3">
                                <img src={item.image} className="card-img-top myimages" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title card-name">{item.title}</h5>
                                    <p className="card-text">City : <span className="text-primary">{item.cities.city}</span></p>
                                </div>
                                <div className="card-body mt-auto ms-auto">
                                    <button className="btn btn-primary btn-sm" onClick={() => { setOpenModel(true); setDestinations(`${item.id}`); }}>Detail</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <hr className=" mb-4 mx-4" />
            <div className="container">
                <h4>Restaurants</h4>
                <div className="row flex-wrap allcard">
                    {dataDestinations.filter(destination => destination.is_food === true).map((item, i) => {
                        return <div key={i} className="col-sm-6 col-lg-3">
                            <div className="card shadow mt-3">
                                <img src={item.image} className="card-img-top myimages" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title card-name">{item.title}</h5>
                                    <p className="card-text">City : <span className="text-primary">{item.cities.city}</span></p>
                                </div>
                                <div className="card-body mt-auto ms-auto">
                                    <button className="btn btn-primary btn-sm" onClick={() => { setOpenModel(true); setDestinations(`${item.id}`); }}>Detail</button>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
}

export default Home;
