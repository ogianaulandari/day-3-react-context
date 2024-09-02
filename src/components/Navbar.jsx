import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.jpg';

const Navbar = ({ isLogIn, handleLogin, handleLogout }) => {
  const { theme, toggleTheme } = useTheme();
  
  const getClassName = ({ isActive }) =>
    `font-medium ${!isLogIn ? 'pointer-events-none opacity-50'  : ''} ${isActive ? 'text-teal-600' : 'text-gray-400'}`;

  return (
    <nav className="p-5 shadow-md bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src={ logo } alt="Logo" className="h-10 mr-2"/>
      <div className="flex items-center space-x-9 ml-12">
        <NavLink to="/" className={ getClassName }>
          Beranda
        </NavLink>
        <NavLink to="/about" className={ getClassName }>
          Tentang Kami
        </NavLink>
        <NavLink to="/help" className={ getClassName }>
          Bantuan
        </NavLink>
        <NavLink to="/media" className={ getClassName }>
          Media
        </NavLink>
        <NavLink to="/contact" className={ getClassName }>
          Kontak
        </NavLink>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      {isLogIn ? (
        <button onClick={handleLogout} className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
          Logout
        </button>) : (
        <button onClick={handleLogin} className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
          Login
        </button>
      )}
        <ToggleSwitch
          isChecked={theme === 'dark'}
          onToggle={toggleTheme}
          label={theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isLogIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Navbar;
