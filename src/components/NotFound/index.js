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
            <div className="not-found-light-container">
              <img
                className="not-found-light-img"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="not-found-light-heading">Lost Your Way?</h1>
              <p className="not-found-light-para">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )}
          {isDarkTheme && (
            <div className="not-found-dark-container">
              <img
                className="not-found-dark-img"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className="not-found-dark-heading">Lost Your Way?</h1>
              <p className="not-found-dark-para">
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
