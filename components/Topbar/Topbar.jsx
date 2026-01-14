import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar-wrap">

      {/* ROW 1 */}
      <div className="topbar-row">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input placeholder='Try searching "insights"' />
        </div>

        <div className="top-right">
          <div className="circle-btn"><i className="bi bi-list"></i></div>
          <div className="avatar"></div>
          <div className="circle-btn pink">+</div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="topbar-row second">
        <div className="user-pills">
            <div className="pill-chip">+</div>

            <div className="pill-user">
                <img src="https://i.pravatar.cc/32?img=12" className="avatar"/>
                Armin A.
            </div>

            <div className="pill-user">
                <img src="https://i.pravatar.cc/32?img=15" className="avatar"/>
                Eren Y.
            </div>

            <div className="pill-user active">
                <img src="https://i.pravatar.cc/32?img=32" className="avatar"/>
                Mikasa A.
            </div>

            <div className="pill-chip black">C</div>
       </div>


        <div className="top-actions">
          <div className="circle-btn"><i className="bi bi-sliders"></i></div>
          <div className="circle-btn"><i className="bi bi-download"></i></div>
          <div className="circle-btn"><i className="bi bi-share"></i></div>
        </div>
      </div>

    </div>
  );
}
