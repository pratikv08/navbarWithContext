// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }
      return (
        <>
          {!isDarkTheme && (
            <nav className="navbar">
              <img
                className="web-logo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              />
              <ul className="navbar-item-container">
                <li className="nav-items">
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-items">
                  <Link className="link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <button
                data-testid="theme"
                className="btn"
                type="button"
                onClick={onToggleTheme}
              >
                <img
                  className="dark-light-theme-icon"
                  alt="theme"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                />
              </button>
            </nav>
          )}
          {isDarkTheme && (
            <nav className="dark-navbar">
              <img
                className="web-logo"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              />
              <ul className="navbar-item-container">
                <li className="nav-dark-items">
                  <Link className="dark-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-dark-items">
                  <Link className="dark-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <button
                data-testid="theme"
                className="btn"
                type="button"
                onClick={onToggleTheme}
              >
                <img
                  className="dark-light-theme-icon"
                  alt="theme"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
