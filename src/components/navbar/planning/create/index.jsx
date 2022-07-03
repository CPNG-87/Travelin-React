import { useLocation } from 'react-router-dom';
import { useState } from "react";

function CreatePlanning() {
    const location = useLocation()
    const { title, cost } = location.state

    const [nameTrip, setNameTrip] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dateCompletion, setDateCompletion] = useState("");
    const [startTime, setStartTime] = useState("");
    const [timeUp, setTimeUp] = useState("");

    function savePlanningHandler() {

        let plannings = JSON.parse(localStorage.getItem("planning") || "[]")

        let planning = {
            destination: title,
            nameTrip: nameTrip,
            startDate: startDate,
            dateCompletion: dateCompletion,
            startTime: startTime,
            timeUp: timeUp,
            cost: cost,
        }

        plannings.push(planning);

        localStorage.setItem('planning', JSON.stringify(plannings));
    }

    function onClickHandler() {
        savePlanningHandler();
        alert("add to planning success");
    }

    return (
        <div className="card ms-4 mt-3 me-4 p-4 shadow">
            <div className="card-title text-center">
                <h2 className="mt-4">Create New Planning</h2>
            </div>
            <div className="container mb-5">
                <div className="row col-md-auto justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label>Name Trip</label>
                                <input type="text" className="form-control" onChange={(e) => { setNameTrip(e.target.value) }} required autofocus />
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label>Start Date</label>
                                    <input type="date" className="form-control" onChange={(e) => { setStartDate(e.target.value) }} required autofocus />
                                </div>
                                <div className="col">
                                    <label>Date of Completion</label>
                                    <input type="date" className="form-control" onChange={(e) => { setDateCompletion(e.target.value) }} required autofocus />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>Destination</label>
                                <input type="text" className="form-control" required disabled value={title} />
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label>Start Time</label>
                                    <input type="time" className="form-control" onChange={(e) => { setStartTime(e.target.value) }} required autofocus />
                                </div>
                                <div className="col">
                                    <label>Time's Up</label>
                                    <input type="time" className="form-control" onChange={(e) => { setTimeUp(e.target.value) }} required autofocus />
                                </div>
                            </div>
                        </form>
                        <div className="text-center mt-5 mb-3">
                            <div className="d-grid gap-2">
                                <button className='btn btn-primary' onClick={onClickHandler}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePlanning;
