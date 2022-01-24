import React, {useEffect} from 'react';
import MatchResult from "../MatchResult/MatchResult";
const MatchList = ({matches}) => {
    return (
        <div>
            {
                matches.map(match=> {
                    return <MatchResult key={match.id}
                                        tournament={match.tournament}
                                        season={match.season}
                                        first_team={match.first_team}
                                        second_team={match.second_team}
                                        first_team_score={match.first_team_score}
                                        second_team_score={match.second_team_score}
                                        />
                })
            }
        </div>
    );
};

export default MatchList;