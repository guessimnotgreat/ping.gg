const API_KEY = 'RGAPI-72c700dc-cdd4-44f9-9621-8e9896a65edb';

const BASE_URL = {
    asia: 'https://asia.api.riotgames.com',
    sea: 'https://sea.api.riotgames.com'
}

const PATHS = {
    idInfo: '/riot/account/v1/accounts/by-riot-id/',
    matchesList: '/lol/match/v5/matches/by-puuid/',
    matchData: '/lol/match/v5/matches/'
}


module.exports = {
    API_KEY,
    BASE_URL,
    PATHS
};