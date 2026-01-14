import { LayoutGrid, Target, FileText, Share2, MessageCircle, Settings } from "lucide-react"
import "./sideicons.css"

export default function SideIcons() {
  return (
    <aside className="sidebar">
      <div className="logo">C</div>

      <div className="side-icons">
        <button><LayoutGrid size={20}/></button>
        <button><Target size={20}/></button>
        <button><FileText size={20}/></button>
        <button><Share2 size={20}/></button>
        <button><MessageCircle size={20}/></button>
      </div>

      <div className="side-bottom">
        <button><Settings size={18}/></button>
      </div>
    </aside>
  )
}
