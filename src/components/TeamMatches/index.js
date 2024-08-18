import {Component} from 'react'

import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({teamDetails: updatedData, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails

    return (
      <>
        {isLoading ? (
          <div className={`loader ${id}`} data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`team-container ${id}`}>
            <div className="team-matches-container">
              <img src={teamBannerUrl} alt="team banner" className="banner" />
              <div className="latest-matches-container">
                <h1 className="label">Latest matches</h1>
                <LatestMatch latestMatchDetails={latestMatchDetails} />
                <ul className="recent-matches-container">
                  {recentMatches.map(each => (
                    <MatchCard key={each.id} matchDetails={each} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
