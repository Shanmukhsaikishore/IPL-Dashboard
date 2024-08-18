import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <li className="match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="match-heading">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={`${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
