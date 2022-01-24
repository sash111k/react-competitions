import React, {useEffect, useState} from 'react';
import {$host} from "../../http";
import MatchResult from "../../components/MatchResult/MatchResult";
import {useFetching} from "../../hooks/useFetching";
import MatchesService from "../../API/MatchesService";
import MatchList from "../../components/MatchResultList/MatchList";
import Loader from "../../components/UI/Loader/Loader";

const Results = () => {
    const [matches, setMatches] = useState([])
    const [fetchMatches, isLoading, error] = useFetching(async () => {
        const gottenMatches = await MatchesService.getMatches();
        setMatches(gottenMatches);
    })
    useEffect(async () => {
        await fetchMatches();
    }, [])
    return (
        <div>
            {
                isLoading ?
                    <Loader/>
                    :
                    <MatchList matches={matches}></MatchList>
            }
        </div>
    );
};

export default Results;