// import './revenue.css'
// import { useState } from 'react'

// export default function RevenueHeader() {
//   const [enabled, setEnabled] = useState(true)

//   return (
//     <div className="rev-wrap">

//       <div className="rev-top">
//         {/* LEFT */}
//         <div className="rev-left">
//           <div className="rev-title">New report</div>
//           <div className="rev-label">Revenue</div>

//           <div className="rev-amount">
//             $528,976<span className="dec">.82</span>

//             <span className="rev-pill">
//               <i className="bi bi-arrow-up-short"></i>7.9%
//             </span>
  
//             <span className="rev-pill">$27,335.09</span>
//           </div>

//           <div className="rev-sub">
//             vs prev. $501,641.73 &nbsp; Jun 1 – Aug 31, 2023
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="rev-controls">
//           <div className="timeframe">
//             <label className={`switch ${enabled?'on':''}`}>
//               <input type="checkbox" checked={enabled} onChange={()=>setEnabled(!enabled)} />
//               <span></span>
//             </label>
//             <span>Timeframe</span>
//             {enabled && <span className="date-pill">Sep 1 – Nov 30, 2023</span>}
//           </div>

//           <div className="kpis">
//             <KPI title="Top sales" big="72" sub="Mikasa" />
//             <KPI dark title="Best deal" big="$42,300" sub="Rolf Inc." />
//             <KPI hover title="Deals" pill="256" sub="↓ 5" />
//             <KPI hover title="Value" pill="528k" sub="↑ 7.9%" />
//             <KPI hover title="Win rate" pill="44%" sub="↑ 1.2%" />
//           </div>
//         </div>
//       </div>
//       {/* DEAL DISTRIBUTION */}
// <div className="deal-rail">

//   <div className="deal-group">
//     <Deal img="https://i.pravatar.cc/32?img=32" amount="$209,633" pct="39.63%" />
//     <Deal img="https://i.pravatar.cc/32?img=11" amount="$156,841" pct="29.65%" />
//     <Deal img="https://i.pravatar.cc/32?img=5"  amount="$117,115" pct="22.14%" />
//     <Deal label="C" amount="$45,386" pct="8.58%" />
//   </div>

//   <button className="details-btn">Details</button>
// </div>

//     </div>
//   )
// }

// function Deal({ img, label, amount, pct }) {
//   return (
//     <div className="deal-pill">
//       {img ? <img src={img}/> : <div className="deal-letter">{label}</div>}
//       <span className="deal-amt">{amount}</span>
//       <span className="deal-pct">{pct}</span>
//     </div>
//   )
// }





// function KPI({ title, big, pill, sub, dark, hover }) {
//   return (
//     <div className={`kpi-card ${dark?'dark':''} ${hover?'hover':''}`}>
//       <div className="kpi-title">{title}</div>
//       {big && <div className="kpi-big">{big}</div>}
//       {pill && <div className="kpi-pill">{pill}</div>}
//       <div className="kpi-sub">{sub}</div>
//     </div>
//   )
// }


import './revenue.css'
import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'

export default function RevenueHeader() {
  const [enabled, setEnabled] = useState(true)

  // useEffect(() => {
  //   new Chart(document.getElementById("refChart"),{
  //     type:"bar",
  //     data:{
  //       labels:["Jun","Jul","Aug","Sep","Oct"],
  //       datasets:[{ data:[52,68,61,79,74], borderRadius:12 }]
  //     },
  //     options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
  //   })

  //   new Chart(document.getElementById("salesChart"),{
  //     type:"line",
  //     data:{
  //       labels:["Jun","Jul","Aug","Sep","Oct","Nov"],
  //       datasets:[{ data:[22,36,29,44,39,51], tension:.4, borderWidth:3 }]
  //     },
  //     options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
  //   })
  // },[])
  useEffect(() => {

  const refCtx = document.getElementById("refChart")
  const salesCtx = document.getElementById("salesChart")

  if(!refCtx || !salesCtx) return

  const refChart = new Chart(refCtx,{
    type:"bar",
    data:{
      labels:["Jun","Jul","Aug","Sep","Oct"],
      datasets:[{ data:[52,68,61,79,74], borderRadius:12 }]
    },
    options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
  })

  const salesChart = new Chart(salesCtx,{
    type:"line",
    data:{
      labels:["Jun","Jul","Aug","Sep","Oct","Nov"],
      datasets:[{ data:[22,36,29,44,39,51], tension:.4, borderWidth:3 }]
    },
    options:{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}
  })

  return () => {
    refChart.destroy()
    salesChart.destroy()
  }
},[])


  return (
    <div className="rev-wrap">

      <div className="rev-top">
        <div className="rev-left">
          <div className="rev-title">New report</div>
          <div className="rev-label">Revenue</div>
          <div className="rev-amount">
            $528,976<span className="dec">.82</span>
            <span className="rev-pill"><i className="bi bi-arrow-up-short"></i>7.9%</span>
            <span className="rev-pill">$27,335.09</span>
          </div>
          <div className="rev-sub">vs prev. $501,641.73 &nbsp; Jun 1 – Aug 31, 2023</div>
        </div>

        <div className="rev-controls">
          <div className="timeframe">
            <label className={`switch ${enabled?'on':''}`}>
              <input type="checkbox" checked={enabled} onChange={()=>setEnabled(!enabled)} />
              <span></span>
            </label>
            <span>Timeframe</span>
            {enabled && <span className="date-pill">Sep 1 – Nov 30, 2023</span>}
          </div>

          <div className="kpis">
            <KPI title="Top sales" big="72" sub="Mikasa" />
            <KPI dark title="Best deal" big="$42,300" sub="Rolf Inc." />
            <KPI hover title="Deals" pill="256" sub="↓ 5" />
            <KPI hover title="Value" pill="528k" sub="↑ 7.9%" />
            <KPI hover title="Win rate" pill="44%" sub="↑ 1.2%" />
          </div>
        </div>
      </div>

      <div className="deal-rail">
        <div className="deal-group">
          <Deal img="https://i.pravatar.cc/32?img=32" amount="$209,633" pct="39.63%" />
          <Deal img="https://i.pravatar.cc/32?img=11" amount="$156,841" pct="29.65%" />
          <Deal img="https://i.pravatar.cc/32?img=5"  amount="$117,115" pct="22.14%" />
          <Deal label="C" amount="$45,386" pct="8.58%" />
        </div>
        <button className="details-btn">Details</button>
      </div>

      {/* ====== ANALYTICS ZONE ====== */}
      <div className="analytics-grid">

        <div className="analytics-card">
          <h4>Platform value</h4>
          <Platform name="Dribbble" value="$227,459" pct="43%" />
          <Platform name="Instagram" value="$142,823" pct="27%" />
          <Platform name="Behance" value="$39,935" pct="11%" />
          <Platform name="Google" value="$37,028" pct="7%" />
        </div>

        <div className="analytics-card pink">
          <h4>Deals amount by referrer category</h4>
          <canvas id="refChart"></canvas>
        </div>

        <div className="analytics-card wide">
          <h4>Sales dynamic</h4>
          <canvas id="salesChart"></canvas>
        </div>

      </div>
    </div>
  )
}

function Deal({ img, label, amount, pct }) {
  return (
    <div className="deal-pill">
      {img ? <img src={img}/> : <div className="deal-letter">{label}</div>}
      <span className="deal-amt">{amount}</span>
      <span className="deal-pct">{pct}</span>
    </div>
  )
}

function KPI({ title, big, pill, sub, dark, hover }) {
  return (
    <div className={`kpi-card ${dark?'dark':''} ${hover?'hover':''}`}>
      <div className="kpi-title">{title}</div>
      {big && <div className="kpi-big">{big}</div>}
      {pill && <div className="kpi-pill">{pill}</div>}
      <div className="kpi-sub">{sub}</div>
    </div>
  )
}

function Platform({name,value,pct}) {
  return (
    <div className="platform-row">
      <span>{name}</span>
      <span>{value}</span>
      <span>{pct}</span>
    </div>
  )
}
