import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="home-loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <div className="card-container">
              <div className="logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="logo"
                />
                <h1 className="main-heading">IPL Dashboard</h1>
              </div>
              <ul className="teams-container">
                {teamsList.map(each => (
                  <TeamCard key={each.id} teamDetails={each} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Home
