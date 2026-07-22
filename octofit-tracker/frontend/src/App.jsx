import './App.css'
import logo from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold mb-3">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness platform for logging workouts, building
            teams, and climbing the leaderboard.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#">
              Explore the app
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="#">
              View API health
            </a>
          </div>
        </div>
        <div className="col-lg-5 text-center">
          <img src={logo} alt="OctoFit Tracker logo" className="img-fluid rounded shadow" />
        </div>
      </div>
    </div>
  )
}

export default App
