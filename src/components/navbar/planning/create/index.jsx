function CreatePlanning() {
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
                                <label>Nama</label>
                                <input type="text" className="form-control" required autofocus />
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                <label>Tanggal Mulai</label>
                                <input type="date" className="form-control"required autofocus />
                                </div>
                                <div className="col">
                                <label>Tanggal Selesai</label>
                                <input type="date" className="form-control"required autofocus />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>Destination</label>
                                <input type="text" className="form-control" required autofocus value="monas"/>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                <label>Waktu Mulai</label>
                                <input type="time" className="form-control"required autofocus/>
                                </div>
                                <div className="col">
                                <label>Waktu Selesai</label>
                                <input type="time" className="form-control"required autofocus/>
                                </div>
                            </div>
                        </form>
                        <div className="text-center mt-5 mb-3">
                            <div className="d-grid gap-2">
                                <a href="#/planning-view" className="btn btn-primary" type="button">Create</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default CreatePlanning;
  