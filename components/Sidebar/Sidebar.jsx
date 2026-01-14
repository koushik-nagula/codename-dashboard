import './sidebar.css'
// import logo from '../../assets/logo.svg'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div >
        {/* <div className="logo-circle">C</div> */}
        <span>Codename.com</span>
      </div>

      <div className="nav-section">
        <div className="nav-item"><i className="bi bi-star"></i> Starred</div>
        <div className="nav-item"><i className="bi bi-clock"></i> Recent</div>
        <div className="nav-item">Sales list</div>
        <div className="nav-item">Goals</div>
      </div>

      <div className="nav-section">
        <div className="nav-title">Dashboard</div>
        <div className="nav-tree">
          <div className="tree-item active">
            <i className="bi bi-grid"></i> Codename
          </div>
          <div className="tree-child">Cargo2go</div>
          <div className="tree-child">Cloudz3r <span className="badge">2</span></div>
          <div className="tree-child">Idioma</div>
          <div className="tree-child">Syllables</div>
          <div className="tree-child">x-0b</div>
        </div>
      </div>

      <div className="nav-section">
        <div className="nav-title">Reports</div>
        <div className="nav-tree">
          <div className="tree-child">Deals by user</div>
          <div className="tree-child">Deal duration</div>
          <div className="tree-child active pink">New report</div>
          <div className="tree-child">Analytics <span className="badge">7</span></div>
        </div>
      </div>
    </aside>
  )
}
