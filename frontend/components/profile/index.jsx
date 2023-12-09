import react from "react"; 


const ProfilePage = ()=>{
    return(
<div className="bg-white">
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <nav className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/">User</a></li>
            <li className="breadcrumb-item active">User Profile</li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src=""
             className="rounded-circle img-fluid" style="width: 150px;"/>
            <h5 className="my-3">John Smith</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
            <div className="d-flex justify-content-center mb-2">
              <button className="btn btn-primary">Follow</button>
              <button className="btn btn-outline-primary ms-1">Message</button>
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-globe fa-lg text-warning"></i>
                <p className="mb-0">https://mdbootstrap.com</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fab fa-github fa-lg"></i>
                <p className="mb-0">mdbootstrap</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="bg-[#55acee]"></i>
                <p className="mb-0">@mdbootstrap</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fab fa-instagram fa-lg"></i>
                <p className="mb-0">mdbootstrap</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className=""></i>
                <p className="mb-0">mdbootstrap</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Johnatan Smith</p>
              </div>
            </div>
            <div>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">example@example.com</p>
              </div>
            </div>
            <div>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(097) 234-5678</p>
              </div>
            </div>
            <div>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(098) 765-4321</p>
              </div>
            </div>
            <div>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p className="mb-1" style="font-size: .77rem;">Web Design</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                <div className="progress rounded mb-2" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p className="mb-1" style="font-size: .77rem;">Web Design</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                <div className="progress rounded" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1">Backend API</p>
                <div className="progress rounded mb-2" style="height: 5px;">
                  <div className="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
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
      </div>
</div>
</div>
)}

export default ProfilePage
