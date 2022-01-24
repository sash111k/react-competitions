import React from 'react';
import cl from './MatchResult.module.css'
const MatchResult = ({tournament, first_team, second_team,
                         season, first_team_score, second_team_score}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.tournament}>{tournament} {season}</div>
            <div className={cl.match_wrapper}>
                <div className={cl.team}>{first_team}</div>
                <div className={cl.score_wrapper}>
                    <div>{first_team_score}</div>
                    <div style={{margin: "0 10px"}}>-</div>
                    <div>{second_team_score}</div>
                </div>
                <div className={cl.team}>{second_team}</div>
            </div>
        </div>
    );
};

export default MatchResult;