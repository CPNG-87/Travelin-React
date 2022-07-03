import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const styleContainer = {
    position: "absolute",
    zIndex: 999,
    width: "40vw",
    right: 0,
    top: "100px",
}

const containerButtonPlanning = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
}

const buttonPlanning = {
    textDecoration: "none",
    backgroundColor: "blue",
    width: "200px",
    textAlign: "center",
    padding: "8px 0",
    color: "white",
    borderRadius: "5px",
}

function Detail({ closeModal, destination }) {
    const [dataDestination, setDataDestination] = useState([]);

    const getDestination = () => {
        axios.get(`http://localhost:5000/destination/${destination}`)
            .then(response => {
                setDataDestination(response.data.data)
            })
    }

    useEffect(() => {
        getDestination()
    })

    return (
        dataDestination.map((item, i) => {
            return <div key={i} className="container" style={styleContainer}>
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ backgroundColor: "#E9ECEF" }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title mb-3">About Destination</h4>
                                    <button onClick={() => closeModal(false)}>x</button>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <img className="radius" src={item.image} alt="" width="150vw" height="150vh" />
                                    </div>
                                    <div className="col-md-8">
                                        <h5 className="card-subtitle mb-2">{item.title}</h5>
                                        <p>{item.address}</p>
                                        <h5>{item.opening_hours}</h5>
                                        <h5>{item.opening_days}</h5>
                                    </div>
                                </div>
                                <h5>Description</h5>
                                <p className="card-text mb-4">{item.description}</p>
                                <div className="row mb-3">
                                    <div className="card-subtitle d-flex justify-content-between">
                                        <h5>Review</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="radius" src={item.image} alt="" width="170vw" height="250vh" />
                                    </div>
                                </div>
                                <h5>Minimum Budget</h5>
                                <h4 className="mb-4 harga">Rp.{item.cost}</h4>
                                <div style={containerButtonPlanning}>
                                    <Link style={buttonPlanning} to="/planning/create" state={{ title: item.title, cost: item.cost }}>Create Planning</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })

    );
}

export default Detail;