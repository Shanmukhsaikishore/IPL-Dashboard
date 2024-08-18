import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className="team-card-container">
      <div className="text-content">
        <div className="text">
          <p className="latest-match-team-name">
            {latestMatchDetails.competingTeam}
          </p>
          <p className="date">{latestMatchDetails.date}</p>
          <p className="venue">{latestMatchDetails.venue}</p>
          <p className="result">{latestMatchDetails.result}</p>
        </div>
        <img
          src={latestMatchDetails.competingTeamLogo}
          alt={`latest match ${latestMatchDetails.competingTeam}`}
          className="competing-team-logo"
        />
      </div>

      <div className="text-content-1">
        <h1 className="innings-text">First Innings</h1>
        <p className="inning-team">{latestMatchDetails.firstInnings}</p>
        <h1 className="innings-text">Second Innings</h1>
        <p className="inning-team">{latestMatchDetails.secondInnings}</p>
        <h1 className="man-o-match">Man Of The Match</h1>
        <p className="inning-team">{latestMatchDetails.manOfTheMatch}</p>
        <h1 className="innings-text">Umpires</h1>
        <p className="inning-team">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
