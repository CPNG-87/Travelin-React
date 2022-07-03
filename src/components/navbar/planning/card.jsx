function Card({ planning }) {

    function deletePlanningHandler(e) {
        let dataPlanning = JSON.parse(localStorage.getItem("planning"));
        dataPlanning.splice(e.currentTarget.id, 1);

        localStorage.setItem("planning", JSON.stringify(dataPlanning));

        alert("delete planning success");
    }

    return (
        planning.map((item, i) => {
            return <div key={i} className="col-sm-6 col-lg-4 mb-3">
                <div className="card shadow">
                    <div className="card-body">
                        <h5 className="card-title">{item.nameTrip}</h5>
                        <h6>Time : </h6>
                        <p>{item.startDate} / {item.dateCompletion}</p>
                        <h6>Destination : </h6>
                        <div className="d-flex justify-content-between">
                            <label>
                                {item.destination}
                            </label>
                            <p className="time">{item.startTime} - {item.timeUp}</p>
                        </div>
                        <h6>Budget : </h6>
                        <h5 className="harga">Rp. {item.cost}</h5>
                    </div>
                    <div className="card-body mt-auto ms-auto d-flex gap-2">
                        <button id={i} className="btn btn-danger" onClick={deletePlanningHandler}>Delete</button>
                    </div>
                </div>
            </div>
        })
    );
}

export default Card;
