// Write your code here
import './index.css'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
              <h1 className="home-light-heading">Home</h1>
            </div>
          )}
          {isDarkTheme && (
            <div className="home-dark-container">
              <img
                className="home-dark-img"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
              <h1 className="home-dark-heading">Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
