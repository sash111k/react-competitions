import {$host} from "../http";

export default class MatchesService {
    static async getMatches(team = 0, tournament = 0, season = 0){
        const response = await $host.get("api/matches");
        return response.data;
    }
}
