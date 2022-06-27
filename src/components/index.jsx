function Home() {
  return (
    <div className="card ms-4 mt-3 me-4 p-4 shadow">
            <div className="card-title text-center">
                <h2 className="mt-3">HOME</h2>
            </div>

            <div className="container">
                <h4>POPULAR TRAVEL</h4>
                <div className="row flex-wrap">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title card-name">Danau Toba</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title card-name">Karimun Jawa</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/10508915/pexels-photo-10508915.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title card-name">Merbabu Mountain</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title card-name">Ragunan Zoo</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mt-5 mb-4 mx-4" />
            <div className="container">
                <h4>POPULAR Restaurants</h4>
                <div className="row flex-wrap">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/3826282/pexels-photo-3826282.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title card-name">Burger Bangor</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/6761506/pexels-photo-6761506.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title card-name">Chicken Fillet</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title card-name">Udang Balado</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card shadow mt-3">
                            <img src="https://images.pexels.com/photos/3535392/pexels-photo-3535392.jpeg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title card-name">Easy Honey Garlic Sushi</h5>
                                <p className="card-text">Rating : <span className="text-primary">4.5</span></p>
                            </div>
                            <div className="card-body mt-auto ms-auto">
                                <a href="#/detail" className="btn btn-primary btn-sm">Detail</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Home;
