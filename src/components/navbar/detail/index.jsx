function Detail() {
    return (
        <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-3"></div>
              <div class="col-md-6">
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title mb-3">About Destination</h4>
                          <div class="row mb-3">
                              <div class="col-md-4">
                              <img className="radius" src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg" alt="" width="150vw" height="150vh"/>
                              </div>
                              <div class="col-md-8">
                              <h5 class="card-subtitle mb-2">kebun Binatang Ragunan</h5>
                              <h6 class="mb-4">Jl. Harsono RM No.1, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta</h6>
                              <h5>06.00 - 21.00</h5>
                              </div>
                          </div>
                          <h5>Description</h5>
                          <p class="card-text mb-4">Kebun binatang 140 hektar di hutan tropis dengan pusat primata, kebun binatang anak & harimau Sumatra & putih.</p>
                          <div class="row mb-3">
                              <div class="card-subtitle d-flex justify-content-between">
                                  <h5>Review</h5>
                                  <a className="reviewBtn" href="#/review-view">See All Review &gt;</a>
                              </div>
                              <div class="col-md-4">
                                  <img className="radius" src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg" alt="" width="170vw" height="250vh"/>
                              </div>
                              <div class="col-md-4">
                                  <img className="radius" src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg" alt="" width="170vw" height="250vh"/>
                              </div>
                              <div class="col-md-4">
                                  <img className="radius" src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg" alt="" width="170vw" height="250vh" />
                              </div>
                          </div>
                          <h5>Minimum Budget</h5>
                          <h4 class="mb-4 harga">Rp.300.000</h4>
                          <div class="d-grid gap-2">
                              <button type="button" class="btn btn-primary btn-style" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                  Add Planning
                              </button>
                          </div>
                          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog">
                                  <div class="modal-content">
                                      <div class="modal-body">
                                          <div class="d-grid gap-2">
                                              <a href="#/create-planning" class="btn btn-primary" type="button">Create Planning</a>
                                              <a className="textwhite" href="#/add-planning" class="btn btn-info" type="button">Add To Planning</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
}
  
export default Detail;