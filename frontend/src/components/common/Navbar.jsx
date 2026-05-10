import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiLogOut, FiUser } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <Link to="/dashboard" className="text-xl sm:text-2xl font-bold text-primary-600">
          TaskManager
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 bg-gray-50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
            <FiUser className="text-gray-600 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-medium text-gray-700 truncate max-w-[100px] sm:max-w-none">
                {user?.name}
              </span>
              <span className={`text-xs font-semibold ${
                user?.role === 'admin' 
                  ? 'text-primary-600' 
                  : 'text-gray-500'
              }`}>
                {user?.role === 'admin' ? '👑 Admin' : 'Member'}
              </span>
            </div>
          </div>
          
          <button
            onClick={logout}
            className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-red-600 transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-red-50"
            aria-label="Logout"
          >
            <FiLogOut size={18} />
            <span className="text-xs sm:text-sm hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
