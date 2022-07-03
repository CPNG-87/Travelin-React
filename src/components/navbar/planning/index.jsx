import Card from "./card";


function Planning() {

    const planning = JSON.parse(localStorage.getItem("planning"));

    return (
        <div className="card ms-4 mt-3 me-4 p-4 shadow">
            <div className="card-title text-center">
                <h2>Planning</h2>
            </div>
            <div className="container">
                <div className="dflex justify-content-between">
                    <div className="row flex-wrap">
                        <Card planning={planning} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Planning;
