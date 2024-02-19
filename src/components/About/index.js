// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {!isDarkTheme && (
            <div className="home-light-container">
              <img
                className="home-light-img"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
              <h1 className="home-light-heading">About</h1>
            </div>
          )}
          {isDarkTheme && (
            <div className="home-dark-container">
              <img
                className="home-dark-img"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
              <h1 className="home-dark-heading">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
