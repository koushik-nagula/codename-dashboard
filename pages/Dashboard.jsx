
import RevenueHeader from '../components/RevenueHeader/RevenueHeader'
import Sidebar from '../components/Sidebar/Sidebar'
import Topbar from '../components/Topbar/Topbar'
import SideIcons from '../components/SideIcons/SideIcons'
export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <SideIcons />
      <div className='dashboard-maini'>
      <Sidebar />
      </div>
      <div className="dashboard-main">
        <Topbar />
        <RevenueHeader />
      </div>
    </div>
  )
}
