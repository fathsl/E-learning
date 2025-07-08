import { Link } from "react-router-dom";

const SideBar = () => {

return (
    <aside className="w-64 bg-white border-r p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li><Link to="/" className="block hover:bg-gray-100 p-2 rounded">Accueil</Link></li>
        <li><Link to="/formations" className="block hover:bg-gray-100 p-2 rounded">Formations</Link></li>
        <li><Link to="/apprenants" className="block hover:bg-gray-100 p-2 rounded">Apprenants</Link></li>
        <li><Link to="/formateurs" className="block hover:bg-gray-100 p-2 rounded">Formateurs</Link></li>
      </ul>
    </aside>
  );
}

export default SideBar