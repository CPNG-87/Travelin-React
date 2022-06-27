function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <div className="dflex justify-content-between">
                <button className="navbar-toggler open-btn" type="button" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand fs-2 text-primary" href="#ok">Travelin</a>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Travel</li>
                    </ol>
                </nav>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
